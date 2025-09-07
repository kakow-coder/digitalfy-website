import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar plugins do GSAP
gsap.registerPlugin(ScrollTrigger);

export const initAnimationsWithAccessibility = () => {
  // Verificar se o usuário prefere movimento reduzido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // Se o usuário prefere movimento reduzido, desabilitar animações complexas
    gsap.set('*', { clearProps: 'all' });
    return;
  }

  // Animação do texto gradient flow
  gsap.to('.text-gradient-flow', {
    backgroundPosition: '200% center',
    duration: 3,
    ease: 'none',
    repeat: -1,
  });

  // Animações dos elementos geométricos 3D
  gsap.to('.geometric-shape-1', {
    y: -20,
    rotation: 360,
    duration: 8,
    ease: 'none',
    repeat: -1,
    yoyo: true,
  });

  gsap.to('.geometric-shape-2', {
    y: 15,
    rotation: -360,
    duration: 10,
    ease: 'none',
    repeat: -1,
    yoyo: true,
    delay: 1,
  });

  gsap.to('.geometric-shape-3', {
    y: -10,
    rotation: 180,
    duration: 6,
    ease: 'none',
    repeat: -1,
    yoyo: true,
    delay: 2,
  });

  // Animação das linhas SVG
  gsap.fromTo('.draw-svg-path', 
    { strokeDasharray: '0 1000' },
    { 
      strokeDasharray: '1000 0',
      duration: 4,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
    }
  );

  gsap.fromTo('.draw-svg-path-delayed', 
    { strokeDasharray: '0 1000' },
    { 
      strokeDasharray: '1000 0',
      duration: 4,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
      delay: 2,
    }
  );

  // Animações de scroll para seções
  gsap.utils.toArray('.section-reveal').forEach((section, index) => {
    gsap.fromTo(section, 
      { 
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });

  // Animações para os cards de serviços
  gsap.utils.toArray('.card-3d').forEach((card, index) => {
    gsap.fromTo(card,
      {
        opacity: 0,
        y: 50,
        rotationY: -15,
      },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Efeito hover 3D
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        rotationY: 5,
        rotationX: 5,
        z: 50,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        z: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });

  // Animações para os cases
  gsap.utils.toArray('.case-card').forEach((card, index) => {
    gsap.fromTo(card,
      {
        opacity: 0,
        scale: 0.8,
        y: 60,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        delay: index * 0.15,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });

  // Animação para métricas dos cases
  gsap.utils.toArray('.case-metric-value').forEach((metric) => {
    ScrollTrigger.create({
      trigger: metric,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(metric,
          { scale: 0.5, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.5,
            ease: 'back.out(1.7)',
          }
        );
      }
    });
  });

  // Animações para títulos
  gsap.utils.toArray('.heading-enhanced').forEach((heading) => {
    gsap.fromTo(heading,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });

  // Animações para botões
  gsap.utils.toArray('.btn-enhanced').forEach((button) => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.2,
        ease: 'power2.out',
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    });
  });

  // Parallax suave para elementos de background
  gsap.utils.toArray('.hero-background').forEach((bg) => {
    gsap.to(bg, {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: bg,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  });

  // Smooth scrolling para links de navegação
  gsap.utils.toArray('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 80, // Offset para o header fixo
          },
          ease: 'power2.inOut',
        });
      }
    });
  });

  // Refresh ScrollTrigger após todas as animações serem configuradas
  ScrollTrigger.refresh();
};

// Função para limpar animações (útil para desenvolvimento)
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.killTweensOf('*');
};

