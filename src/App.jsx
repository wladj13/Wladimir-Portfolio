import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Section = ({ children, className, id }) => (
  <motion.section 
    id={id}
    className={`py-32 px-8 md:px-16 lg:px-24 ${className || ''}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeUp}
  >
    {children}
  </motion.section>
);

function CustomCursor() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[100] shadow-[0_0_10px_rgba(143,245,255,0.5)]"
      animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.2 }}
    >
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
}

function App() {
  const [formData, setFormData] = React.useState({
    nombre: '',
    email: '',
    tipoProblema: 'Redes / Telecom',
    descripcion: '',
    presupuesto: '$500 - $1,500',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.descripcion) {
      alert('Por favor, completa al menos tu nombre, correo y la descripción del desafío.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const res = await fetch("https://formsubmit.co/ajax/contacto@wladimiralbarran.me", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          correo: formData.email,
          tipoProblema: formData.tipoProblema,
          descripcion: formData.descripcion,
          presupuesto: formData.presupuesto,
          timeline: formData.timeline,
          _subject: `Nuevo Desafío Técnico de: ${formData.nombre}`
        })
      });
      
      if (res.ok) {
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
        setFormData({
          nombre: '',
          email: '',
          tipoProblema: 'Redes / Telecom',
          descripcion: '',
          presupuesto: '$500 - $1,500',
          timeline: ''
        });
      } else {
        alert("Hubo un error al enviar el mensaje. Por favor revisa tu conexión e inténtalo de nuevo.");
      }
    } catch (error) {
      alert("Error de conexión al enviar el formulario.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 selection:text-primary min-h-screen cursor-default">
      <CustomCursor />
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0c0e12]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(143,245,255,0.1)] flex justify-between items-center px-8 py-4 max-w-full mx-auto font-headline tracking-tight">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 cursor-pointer"
        >
          &lt;WA /&gt;
        </button>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-cyan-400 border-b-2 border-cyan-400 pb-1" href="#systems">Pilares</a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#work">Proyectos</a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#pricing">Planes</a>
        </div>
        <a href="mailto:contacto@wladimiralbarran.me">
          <button className="bg-primary-container text-on-primary-container px-6 py-2 font-bold scale-95 active:scale-90 transition-transform rounded hover:shadow-[0_0_15px_rgba(143,245,255,0.5)]">Contactar</button>
        </a>
      </nav>

      <main className="relative pt-24 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-8 md:px-16 lg:px-24">
          <div className="light-leak bg-primary top-20 -left-20"></div>
          <div className="light-leak bg-secondary bottom-0 right-0"></div>
          
          <motion.div 
            className="z-10 max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-4">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="font-headline tracking-widest text-primary uppercase text-sm">Ex-Huawei · Salt Lake City, UT</span>
              <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold font-mono border border-white/5">MikroTik/Ubiquiti</span>
              <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold font-mono border border-white/5">Full-Stack</span>
              <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold font-mono border border-white/5">IA & LLMs</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-headline text-5xl md:text-7xl font-bold leading-tight mb-8">
              Wladimir Albarran <br/>
              <span className="glow-text">Soluciones que conectan todo.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
              De la antena al algoritmo de IA. Ingeniero en Computación especializado en redes de alta eficiencia, desarrollo full-stack moderno (Next.js/FastAPI), inteligencia artificial y marketing digital. 
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6">
              <a href="mailto:contacto@wladimiralbarran.me">
                <button className="bg-primary text-on-primary px-8 py-4 font-bold flex items-center gap-3 group transition-all">
                  Resolver mi desafío
                  <span className="material-icons-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </a>
              <a href="#work">
                <button className="border border-primary/30 text-primary px-8 py-4 font-bold hover:bg-primary/5 transition-colors">
                  Ver proyectos reales
                </button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 w-[400px] h-[500px] glass-panel p-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.5, duration: 1 } }}
          >
            <div className="h-full border border-white/5 flex flex-col justify-between p-6">
              <div className="space-y-4">
                <div className="text-on-surface-variant font-headline text-xs tracking-tighter opacity-50">SYSTEM_STATUS: ONLINE</div>
                <div className="h-1 w-full bg-surface-container-highest">
                  <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 1.5 }}
                  />
                </div>
              </div>
              <div className="font-headline text-4xl text-right opacity-20 select-none">
                W.ALBARRAN<br/>001.002.04
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <span className="text-xs uppercase tracking-widest text-secondary">Awaiting Input</span>
              </div>
            </div>
            <img className="absolute -top-12 -left-12 w-48 h-48 object-cover shadow-2xl" alt="Chip view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjyxozepGsOkyi6qApWve323G_yfQ1OQr6_CIbeumIqQpttWV0RYoemz-ZFuBZw6u7oGxxpTH0N-AKRhvIQqa00EtziWkovtgl7U_ezKvFmwPY6jEGluSA1NH41TiN_0mIHJptnXbN92CFhgpvPEZ1s6uFkyEn0GHfh8xBlaMmPZLL8gr54TP_ODGr31ugDUdbYHWJ13OlS7AcUf3-pRnH-XQj7svY1bnDoI7tKA1x6H5Gg0awxsuTMw_6b73UiuDFUGhKGG3nSA"/>
          </motion.div>
        </section>

        {/* Problem Section */}
        <Section className="py-24 bg-surface-container-lowest">
          <div className="mb-20 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">¿Tu negocio sufre de...?</h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'cloud_off', color: 'text-secondary', title: 'Sistemas desconectados', desc: 'Sistemas aislados y errores operativos por costos innecesarios o falta de sincronización.' },
              { icon: 'speed', color: 'text-primary', title: 'Redes lentas', desc: 'Redes mal diseñadas que frustran tanto a tus clientes como a tus propios empleados.' },
              { icon: 'history', color: 'text-tertiary', title: 'Software obsoleto', desc: 'Soluciones legacy que limitan y frenan el crecimiento natural de tu negocio.' },
              { icon: 'settings_suggest', color: 'text-secondary', title: 'Falta de automatización', desc: 'Tareas repetitivas manuales que consumen tiempo valioso reduciendo beneficios.' },
              { icon: 'smart_toy', color: 'text-primary', title: 'Sin Inteligencia Artificial', desc: 'Mientras tú vas manual, la competencia automatiza y te toma ventaja tecnológica.' },
              { icon: 'campaign', color: 'text-tertiary', title: 'Marketing Débil', desc: 'Cuentas con la estructura pero nadie logra encontrarte en el entorno digital.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="p-8 border-l border-white/5 hover:bg-surface-container-high transition-colors"
                variants={fadeUp}
              >
                <span className={`material-icons-outlined ${item.color} text-4xl mb-6`}>{item.icon}</span>
                <h3 className="font-headline text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-on-surface-variant text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Pilares Section / Services */}
        <Section id="systems" className="bg-surface-dim">
          <div className="mb-20 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Mis <span className="glow-text">5 Pilares</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { num: '01', title: 'Redes MikroTik & Ubiquiti', desc: 'Diseño WISP, balanceo de carga, firewall avanzado, VPNs globales, y optimización RF.' },
              { num: '02', title: 'Desarrollo Full-Stack', desc: 'Aplicaciones escalables de alto rendimiento con Next.js, FastAPI, PostgreSQL y Docker.' },
              { num: '03', title: 'Inteligencia Artificial', desc: 'Implementación de automatización inteligente, integraciones nativas con Claude API, Agentes IA y Whisper AI.' },
              { num: '04', title: 'Video & Marketing Digital', desc: 'Producción audiovisual profesional con DaVinci Resolve y estrategias algorítmicas de branding.' },
              { num: '05', title: 'Integración Total', desc: 'Tu ecosistema cohesivo: Conexión de redes con software escalado, inteligencia artificial y canales de marketing.' }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-panel p-8 flex flex-col md:flex-row gap-6 items-start">
                <div className="font-headline text-6xl font-black text-white/5">{step.num}</div>
                <div>
                  <h4 className="font-headline text-xl font-bold text-primary mb-3">{step.title}</h4>
                  <p className="text-on-surface-variant text-md">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="work">
          <h2 className="font-headline text-4xl font-bold mb-16 text-right">Resultados <span className="glow-text">Reales</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Hortaline.com", 
                tags: ["MikroTik", "Next.js", "FastAPI"],
                desc: "Gestión para WISPs y operadores optimizando flujos administrativos críticos en tiempo real.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT7aMEXzFm7SDw_Ne9j_qm6vJl91OheUhdRH7WrT3KrlIg4An4THXfySzgMKXG45AkzTXAgtP1ANU0_mr51VvJQ79uwgxXiyd25s1VSxmIGdnBaQ4JrssNbme9gxSqvuqbge6Gmo7TgnjtlSz_2m8lipya7wGlK3kvT6PwHZGbou1UOQ7YmDhJlxf4hVoIThaEyANkYdEZcW8-eZh6gwSl6fuYiMXR6c1uNvA38RhJ6hgkD6RLZi-in_UILCLNYVSSK9Efjg3Mgw"
              },
              {
                title: "App Precios Agrícolas", 
                tags: ["Whisper AI", "Telegram Bots"],
                desc: "Registro de precios y análisis de mercados usando voz procesada por IA.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAca4hnR--H3k5TIn7iuRzJteYDh3Xhecch-kD36CHDrWbLONhbKIRjekop14KLzREkyd6TVCshAQ53n__CXC6eV98OgeHo-pucFpfE-zowlzRspSQfwl-JTdZBOgN2woiGgvlp-aK-a3kB-ZvnV1YL_V6q4Z40uuIEAxc9Gfj9TVV2RnZZgq0Tn4iklyJLeZQFFbHonlPiVhsdvNBKEufizx65YgE8BSOPzs1d2RgwyHXrtiQncU-HnjMn4kiIyQGggVX6yMg0PA"
              },
              {
                title: "Walmart Shopping Assistant", 
                tags: ["Claude API", "PWA"],
                desc: "Progressive Web App que escanea códigos de barra y compara métricas con procesamiento LLM en tiempo real.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlC3vO1Hlq6yvDxyf4Nq2sY2oP-iF3C7LgBpHx-cKz6b2g4O0Gv5rS4A5N9xL9u-5B0C9mI6j8Ym1rL7fJ5oA3Y9HnJ1uL8fQ2gT5mW8cR4aX6eH3rY9xK5gR1lT6zN9yP1mV8uP4sF2yM4eL9uK8tV3oT5eL9uK8tV3o" // Generic valid URL path logic from system
              },
              {
                title: "WlaDJ Productions", 
                tags: ["DaVinci Resolve", "Branding"],
                desc: "Dirección de arte, producción de video profesional y contenido optimizado para marcas corporativas.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiB9H-ru6PUpBNLM-b17imqX9CknYhI5UxGuJCmpmFq3zfGxzi0cvcx6QDjBMA1Wf2Lv5P8zPCDiMEOhevzqdTUJAGz03fM7k1XLaGmcV5f8Tdb3KchqDGiC536jCdVVd4f3vLUpH8rdyqBpLU2OGpIDMbh3fiO7VdfUBRv-emKfShAVQO0c1JD8zgOKDqJhi67JxDoXqIgmH81vkpb6aLDbeAXDDcvVaofw-ZL3XbXSIxxj4VIWarpyjlquKRf-2l_leGwZV96A" 
              }
            ].map((proj, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-panel p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                <img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" alt={proj.title} src={proj.img || "https://lh3.googleusercontent.com/aida-public/AB6AXuCufK1uV6YxvItlcU12UTOvflA2dMR6GkKYy0H17cj8Uxby9t7RSr2BYuko45qDBxMcbDcJM3e7g31QsjYY3ESY-7IGUZw6Ddw6iCn2LcZysZBiC7yNoYywvhHNIkw1qkpAoHRHS7tcjn1Mz4SwKdba8bfzdFbDB4o5L_ZrfAzvdiMQ3ZTiascTfrv0EHlSDWeaiNNRLIEBbfpsIpGBpw1_020LBBwMKXlw2riXWPfsmbRRlj2nVf3UX0oyA-qyMbveFKDcndspug"} />
                <div className="relative z-20 h-full flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-surface-variant/80 backdrop-blur-md text-primary text-[10px] uppercase font-bold tracking-widest rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-headline text-3xl font-bold mb-2">{proj.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-6 max-w-sm">{proj.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Pricing Section */}
        <Section id="pricing" className="bg-surface-container-low">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold mb-4">Planes de <span className="glow-text">Despliegue</span></h2>
            <p className="text-on-surface-variant">Soluciones empaquetadas adaptadas a la envergadura de tu proyecto.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Básico", price: "$299", subtitle: "/mes", desc: "Mantenimiento & Estabilidad",
                features: ["Soporte Remoto (5h)", "Actualizaciones de Seguridad", "Auditoría de Red básica"]
              },
              {
                title: "Profesional", price: "$999", subtitle: "/proyecto", desc: "Desarrollo de Solución Completa",
                features: ["Diseño de Red a Medida", "Integración de APIs y Bots", "Software Automatizado", "3 Meses Soporte"]
              },
              {
                title: "Empresarial", price: "$2,999+", subtitle: "personalizado", desc: "Transformación Total",
                features: ["Full Digital Transformation", "Estrategia IA", "Capacitación a tu equipo", "Soporte Premium 6 Meses"]
              }
            ].map((plan, i) => (
              <motion.div key={i} variants={fadeUp} className={`glass-panel p-8 flex flex-col relative ${i===1 ? 'ring-2 ring-primary scale-105' : ''}`}>
                {i===1 && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Most Popular</div>}
                <div className="mb-8">
                  <h4 className="font-headline text-xl font-bold mb-2">{plan.title}</h4>
                  <div className="text-4xl font-bold">{plan.price}<span className="text-sm font-normal text-on-surface-variant font-body">{plan.subtitle}</span></div>
                  <p className="text-xs text-secondary mt-3 uppercase font-bold tracking-widest">{plan.desc}</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-on-surface">
                      <span className="material-icons-outlined text-primary text-sm">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="mailto:contacto@wladimiralbarran.me">
                  <button className={`w-full py-4 font-bold transition-all ${i===1 ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(143,245,255,0.3)]' : 'border border-white/20 hover:bg-white/5'}`}>
                    Contratar {plan.title}
                  </button>
                </a>
              </motion.div>
            ))}
          </div>
        </Section>
        
        {/* Stats Section */}
        <Section className="py-24">
          <div className="glass-panel p-12 max-w-5xl mx-auto flex flex-col md:flex-row justify-around items-center text-center gap-12">
            <div>
              <div className="text-6xl font-black font-headline text-primary mb-2">15+</div>
              <div className="text-sm uppercase tracking-widest font-bold text-on-surface-variant">Proyectos Exitosos</div>
            </div>
            <div className="h-24 w-px bg-white/10 hidden md:block"></div>
            <div>
              <div className="text-6xl font-black font-headline text-secondary mb-2">-70%</div>
              <div className="text-sm uppercase tracking-widest font-bold text-on-surface-variant">Tiempo Administrativo</div>
            </div>
            <div className="h-24 w-px bg-white/10 hidden md:block"></div>
            <div>
              <div className="text-6xl font-black font-headline text-tertiary mb-2">99%</div>
              <div className="text-sm uppercase tracking-widest font-bold text-on-surface-variant">Clientes Satisfechos</div>
            </div>
          </div>
        </Section>

        {/* Contact Form Section */}
        <Section id="contact" className="bg-surface-container-low relative">
          <div className="light-leak bg-tertiary top-0 left-0"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <motion.div variants={fadeUp}>
              <h2 className="font-headline text-4xl font-bold mb-8">¿Listo para el <span className="glow-text">Siguiente Nivel?</span></h2>
              <p className="text-on-surface-variant text-lg mb-12">
                Cuéntame sobre tu desafío técnico. Ya sea una red inestable o la necesidad de una aplicación escalable, estoy aquí para construir la solución integral.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-icons-outlined">mail</span>
                  </div>
                  <span className="font-headline selection:bg-none">contacto@wladimiralbarran.me</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-icons-outlined">location_on</span>
                  </div>
                  <span className="font-headline">Salt Lake City, UT / Remoto Global</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="glass-panel p-10">
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Nombre</label>
                    <input name="nombre" value={formData.nombre} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary py-3 px-4 text-on-surface outline-none" type="text" placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Correo Electrónico</label>
                    <input name="email" type="email" value={formData.email} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary py-3 px-4 text-on-surface outline-none" placeholder="tu@correo.com" required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Tipo de Problema</label>
                  <select name="tipoProblema" value={formData.tipoProblema} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary py-3 px-4 text-on-surface outline-none">
                    <option>Redes / Telecom</option>
                    <option>Software a Medida</option>
                    <option>Automatización / IA</option>
                    <option>Consultoría General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Descripción del Desafío</label>
                  <textarea name="descripcion" value={formData.descripcion} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary py-3 px-4 text-on-surface outline-none" rows="4" placeholder="Describe brevemente el desafío..." required></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Presupuesto Estimado</label>
                    <select name="presupuesto" value={formData.presupuesto} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary py-3 px-4 text-on-surface outline-none">
                      <option>$500 - $1,500</option>
                      <option>$1,500 - $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Timeline</label>
                    <input name="timeline" value={formData.timeline} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary py-3 px-4 text-on-surface outline-none" placeholder="e.g. 1 mes" type="text" />
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-secondary text-white font-bold uppercase tracking-widest hover:brightness-110 transition-all cursor-pointer disabled:opacity-50">
                  {isSubmitting ? 'Enviando...' : 'Enviar Desafío'}
                </button>
              </form>
            </motion.div>
          </div>
        </Section>
      </main>

      {/* Button to go Top */}
      <div className="w-full text-center py-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-primary font-headline text-xl font-bold hover:text-secondary transition-colors cursor-pointer"
        >
          &lt;WA /&gt;
        </button>
      </div>

      <footer className="bg-[#0c0e12] border-t border-indigo-500/20 w-full py-16 flex flex-col items-center justify-center gap-4 text-sm tracking-widest">
        <div className="text-cyan-400 font-bold text-2xl mb-2 font-headline">&lt;WladimirAlbarran /&gt;</div>
        <div className="text-on-surface-variant font-bold text-center">Redes MikroTik/Ubiquiti · Full-Stack · IA &amp; Marketing Digital</div>
        
        <div className="flex gap-6 my-4 text-slate-300">
          <div className="flex items-center gap-2"><span className="material-icons-outlined text-sm">location_on</span> Salt Lake City, UT</div>
          <div className="flex items-center gap-2"><span className="material-icons-outlined text-sm">language</span> Remoto global</div>
          <div className="flex items-center gap-2"><span className="material-icons-outlined text-sm">mail</span> contacto@wladimiralbarran.me</div>
        </div>

        <div className="flex gap-8 mb-6 uppercase text-xs font-bold">
          <a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#">LinkedIn</a>
          <a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#">GitHub</a>
          <a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#">Telegram</a>
          <a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#">YouTube</a>
        </div>
        <div className="text-slate-600 text-[10px] uppercase">Diseñado y desarrollado por Wladimir Albarran · © 2026</div>
      </footer>
    </div>
  );
}

export default App;
