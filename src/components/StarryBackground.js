import React, { useEffect, useRef } from "react";

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const stars = [];
    const starCount = 500;

    // Set the canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Star class
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * canvas.width;
        this.radius = Math.random() * 1.5;
        this.speed = Math.random() * 0.05 + 7;
      }

      update() {
        this.z -= this.speed;
        if (this.z <= 0) {
          this.z = canvas.width;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        const screenX = (this.x - canvas.width / 2) * (canvas.width / this.z);
        const screenY = (this.y - canvas.height / 2) * (canvas.width / this.z);
        const radius = this.radius * (canvas.width / this.z);

        // Create a radial gradient for each star
        const gradient = context.createRadialGradient(
          screenX + canvas.width / 2,
          screenY + canvas.height / 2,
          0,
          screenX + canvas.width / 2,
          screenY + canvas.height / 2,
          radius
        );
        gradient.addColorStop(0, "#ffffff"); // Center color
        gradient.addColorStop(1, "#9d00ffc5"); // Outer color
        
        context.beginPath();
        context.arc(screenX + canvas.width / 2, screenY + canvas.height / 2, radius, 0, 2 * Math.PI);
        context.fillStyle = gradient;
        context.fill();
      }
    }

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    const animate = () => {
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
};

export default StarryBackground;
