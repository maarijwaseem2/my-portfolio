import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";

/**
 * A self-contained WebGL object: a faceted/knotted core inside a wireframe
 * shell, wrapped in a drifting particle field. Rotates on its own, leans toward
 * the pointer, PAUSES when scrolled off-screen (so it never wastes CPU), cleans
 * up fully on unmount, and renders a single static frame when reduced motion is
 * requested.
 *
 * Props:
 *   variant        "ico" (default) | "torus" | "octa" — the core shape
 *   particleCount  number of drifting points (default 720)
 *   speed          rotation-speed multiplier (default 1)
 */
const coreGeometry = (variant) => {
  if (variant === "torus") return new THREE.TorusKnotGeometry(1.05, 0.34, 150, 20);
  if (variant === "octa") return new THREE.OctahedronGeometry(1.6, 0);
  return new THREE.IcosahedronGeometry(1.5, 1);
};
const shellGeometry = (variant) => {
  if (variant === "torus") return new THREE.TorusKnotGeometry(1.14, 0.34, 150, 20);
  if (variant === "octa") return new THREE.OctahedronGeometry(2.0, 0);
  return new THREE.IcosahedronGeometry(1.9, 1);
};

const Hero3D = ({ className = "", variant = "ico", particleCount = 720, speed = 1 }) => {
  const mountRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth || 420;
    let height = mount.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Core
    const coreGeo = coreGeometry(variant);
    const coreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x6366f1),
      metalness: 0.35,
      roughness: 0.25,
      flatShading: variant !== "torus",
      transparent: true,
      opacity: 0.94,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // Wireframe shell
    const wireGeo = shellGeometry(variant);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: variant === "torus" ? 0.22 : 0.3,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    group.add(wire);

    // Particle field
    const count = particleCount;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.1 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x8b5cf6,
      size: 0.032,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const l1 = new THREE.PointLight(0x6366f1, 2.4, 60);
    l1.position.set(5, 5, 5);
    const l2 = new THREE.PointLight(0x22d3ee, 1.8, 60);
    l2.position.set(-5, -3, 4);
    const l3 = new THREE.PointLight(0x8b5cf6, 1.4, 60);
    l3.position.set(0, 4, -5);
    scene.add(l1, l2, l3);

    const targetRot = { x: 0, y: 0 };
    const onMouse = (e) => {
      targetRot.x = e.clientX / window.innerWidth - 0.5;
      targetRot.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", onMouse);

    const onResize = () => {
      width = mount.clientWidth;
      height = mount.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    // Rotation loop — pauses when off-screen, resumes without a time jump.
    let raf = null;
    let running = false;
    let elapsed = 0;
    let last = 0;

    const frame = () => {
      const now = performance.now();
      elapsed += (now - last) / 1000;
      last = now;

      group.rotation.y = elapsed * 0.34 * speed;
      group.rotation.x = elapsed * 0.14 * speed + Math.sin(elapsed * 0.4) * 0.12;
      wire.rotation.y = -elapsed * 0.22 * speed;
      wire.rotation.z = elapsed * 0.08 * speed;
      points.rotation.y = elapsed * 0.05;
      group.position.x += (targetRot.x * 0.6 - group.position.x) * 0.05;
      group.position.y += (-targetRot.y * 0.4 - group.position.y) * 0.05;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || reduce) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0, rootMargin: "200px" }
    );
    io.observe(mount);

    if (reduce) renderer.render(scene, camera);
    else start();

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("mousemove", onMouse);
      ro.disconnect();
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [reduce, variant, particleCount, speed]);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
};

export default Hero3D;
