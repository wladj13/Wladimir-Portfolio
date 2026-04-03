import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipoProblema: 'Redes / Telecom',
    descripcion: '',
    presupuesto: '$500 - $1,500',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.descripcion) {
      alert('Por favor, completa al menos tu nombre, correo y la descripción.');
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
        alert("¡Mensaje enviado con éxito!");
        setFormData({
          nombre: '',
          email: '',
          tipoProblema: 'Redes / Telecom',
          descripcion: '',
          presupuesto: '$500 - $1,500',
          timeline: ''
        });
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      alert("Error de conexión al enviar el formulario.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 selection:text-primary min-h-screen">
      {/* Contenido de code.html */}
      
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-[#0c0e12]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(143,245,255,0.1)] flex justify-between items-center px-8 py-4 max-w-full mx-auto font-['Space_Grotesk'] tracking-tight">
<div className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">NET_ARCHITECT</div>
<div className="hidden md:flex gap-8 items-center">
<a className="text-cyan-400 border-b-2 border-cyan-400 pb-1" href="#systems">Systems</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#protocols">Protocols</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#insights">Insights</a>
</div>
<button className="bg-primary-container text-on-primary-container px-6 py-2 font-bold scale-95 active:scale-90 transition-transform rounded hover:shadow-[0_0_15px_rgba(143,245,255,0.5)]">Connect</button>
</nav>
<main className="relative pt-24 overflow-hidden">
{/*  Hero Section  */}
<section className="relative min-h-[921px] flex items-center px-8 md:px-16 lg:px-24">
<div className="light-leak bg-primary top-20 -left-20"></div>
<div className="light-leak bg-secondary bottom-0 right-0"></div>
<div className="z-10 max-w-4xl">
<div className="mb-6 flex items-center gap-4">
<span className="w-12 h-[1px] bg-primary"></span>
<span className="font-headline tracking-widest text-primary uppercase text-sm">Computer Science &amp; Telecom Engineer</span>
</div>
<h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight mb-8">
                    Wladimir Albarran <br/>
<span className="glow-text">Architecting Digital Connectivity.</span>
</h1>
<p className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
                    Transformo problemas técnicos complejos en soluciones simples y escalables. Diseño infraestructuras robustas y software de alto rendimiento para la era de la hiper-conectividad.
                </p>
<div className="flex flex-col sm:flex-row gap-6">
<button className="bg-primary text-on-primary px-8 py-4 font-bold flex items-center gap-3 group transition-all">
                        Resolver mi desafío técnico
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
<button className="border border-primary/30 text-primary px-8 py-4 font-bold hover:bg-primary/5 transition-colors">
                        Ver proyectos reales
                    </button>
</div>
</div>
<div className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 w-[400px] h-[500px] glass-panel p-8">
<div className="h-full border border-white/5 flex flex-col justify-between p-6">
<div className="space-y-4">
<div className="text-on-surface-variant font-headline text-xs tracking-tighter opacity-50">SYSTEM_STATUS: ONLINE</div>
<div className="h-1 w-full bg-surface-container-highest">
<div className="h-full bg-primary w-3/4"></div>
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
<img className="absolute -top-12 -left-12 w-48 h-48 object-cover shadow-2xl" data-alt="Close-up of a futuristic glowing microchip circuit board with teal and purple neon lights reflecting on metallic surfaces" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjyxozepGsOkyi6qApWve323G_yfQ1OQr6_CIbeumIqQpttWV0RYoemz-ZFuBZw6u7oGxxpTH0N-AKRhvIQqa00EtziWkovtgl7U_ezKvFmwPY6jEGluSA1NH41TiN_0mIHJptnXbN92CFhgpvPEZ1s6uFkyEn0GHfh8xBlaMmPZLL8gr54TP_ODGr31ugDUdbYHWJ13OlS7AcUf3-pRnH-XQj7svY1bnDoI7tKA1x6H5Gg0awxsuTMw_6b73UiuDFUGhKGG3nSA"/>
</div>
</section>
{/*  Problem/Challenge Section  */}
<section className="py-24 px-8 md:px-16 lg:px-24 bg-surface-container-lowest">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="p-8 border-l border-white/5 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="cloud_off">cloud_off</span>
<h3 className="font-headline text-xl font-bold mb-4">Sistemas desconectados</h3>
<p className="text-on-surface-variant text-sm">Fragmentación de datos y silos operativos que frenan el crecimiento de tu infraestructura.</p>
</div>
<div className="p-8 border-l border-white/5 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-primary text-4xl mb-6" data-icon="speed">speed</span>
<h3 className="font-headline text-xl font-bold mb-4">Redes lentas</h3>
<p className="text-on-surface-variant text-sm">Latencia y cuellos de botella que impactan directamente en la productividad del usuario final.</p>
</div>
<div className="p-8 border-l border-white/5 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-tertiary text-4xl mb-6" data-icon="history">history</span>
<h3 className="font-headline text-xl font-bold mb-4">Software obsoleto</h3>
<p className="text-on-surface-variant text-sm">Código legado que consume recursos y carece de la flexibilidad necesaria para el mercado actual.</p>
</div>
<div className="p-8 border-l border-white/5 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="settings_suggest">settings_suggest</span>
<h3 className="font-headline text-xl font-bold mb-4">Falta de automatización</h3>
<p className="text-on-surface-variant text-sm">Procesos manuales repetitivos que aumentan el margen de error y reducen el ROI operativo.</p>
</div>
</div>
</section>
{/*  Approach Section  */}
<section className="py-32 px-8 md:px-16 lg:px-24 bg-surface-dim" id="protocols">
<div className="mb-20 text-center">
<h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">El Método <span className="glow-text">Ethereal Architect</span></h2>
<div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
</div>
<div className="flex flex-col gap-12">
{/*  Step 01  */}
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="font-headline text-8xl font-black text-white/5 shrink-0">01</div>
<div className="md:pt-12">
<h4 className="font-headline text-2xl font-bold text-primary mb-4">Infraestructura</h4>
<p className="text-on-surface-variant text-lg max-w-2xl">
                            Diseño de redes resilientes y escalables. Desde topologías físicas hasta virtualización de servidores, garantizando disponibilidad y seguridad del 99.9%.
                        </p>
</div>
</div>
{/*  Step 02  */}
<div className="flex flex-col md:flex-row gap-8 items-start md:translate-x-24">
<div className="font-headline text-8xl font-black text-white/5 shrink-0">02</div>
<div className="md:pt-12">
<h4 className="font-headline text-2xl font-bold text-secondary mb-4">Desarrollo</h4>
<p className="text-on-surface-variant text-lg max-w-2xl">
                            Creación de software a medida utilizando stacks modernos. Enfocado en rendimiento, mantenibilidad y una experiencia de usuario sin fricciones.
                        </p>
</div>
</div>
{/*  Step 03  */}
<div className="flex flex-col md:flex-row gap-8 items-start md:translate-x-48">
<div className="font-headline text-8xl font-black text-white/5 shrink-0">03</div>
<div className="md:pt-12">
<h4 className="font-headline text-2xl font-bold text-tertiary mb-4">Integración</h4>
<p className="text-on-surface-variant text-lg max-w-2xl">
                            El puente que une hardware y software. Implementación de APIs, automatizaciones y bots que orquestan todo tu ecosistema digital.
                        </p>
</div>
</div>
</div>
</section>
{/*  Projects Section (Bento Grid Style)  */}
<section className="py-32 px-8 md:px-16 lg:px-24" id="work">
<h2 className="font-headline text-4xl font-bold mb-16 text-right">Proyectos <span className="glow-text">Seleccionados</span></h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[450px]">
{/*  Project 1  */}
<div className="md:col-span-2 glass-panel p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Modern high-tech agricultural field with drones flying over crops at night under bioluminescent laboratory lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT7aMEXzFm7SDw_Ne9j_qm6vJl91OheUhdRH7WrT3KrlIg4An4THXfySzgMKXG45AkzTXAgtP1ANU0_mr51VvJQ79uwgxXiyd25s1VSxmIGdnBaQ4JrssNbme9gxSqvuqbge6Gmo7TgnjtlSz_2m8lipya7wGlK3kvT6PwHZGbou1UOQ7YmDhJlxf4hVoIThaEyANkYdEZcW8-eZh6gwSl6fuYiMXR6c1uNvA38RhJ6hgkD6RLZi-in_UILCLNYVSSK9Efjg3Mgw"/>
<div className="relative z-20 h-full flex flex-col justify-end">
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 bg-primary/20 text-primary text-[10px] uppercase font-bold tracking-widest rounded-full">Web App</span>
<span className="px-3 py-1 bg-secondary/20 text-secondary text-[10px] uppercase font-bold tracking-widest rounded-full">Automation</span>
</div>
<h3 className="font-headline text-3xl font-bold mb-2">Hortaline.com</h3>
<p className="text-on-surface-variant mb-6 max-w-md">Plataforma integral de gestión agrícola que conecta productores y distribuidores en tiempo real.</p>
<a className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all" href="#">Ver detalles <span className="material-symbols-outlined">north_east</span></a>
</div>
</div>
{/*  Project 2  */}
<div className="glass-panel p-8 relative overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50" data-alt="Smartphone display showing complex financial data and price charts with neon UI elements against a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAca4hnR--H3k5TIn7iuRzJteYDh3Xhecch-kD36CHDrWbLONhbKIRjekop14KLzREkyd6TVCshAQ53n__CXC6eV98OgeHo-pucFpfE-zowlzRspSQfwl-JTdZBOgN2woiGgvlp-aK-a3kB-ZvnV1YL_V6q4Z40uuIEAxc9Gfj9TVV2RnZZgq0Tn4iklyJLeZQFFbHonlPiVhsdvNBKEufizx65YgE8BSOPzs1d2RgwyHXrtiQncU-HnjMn4kiIyQGggVX6yMg0PA"/>
<div className="relative z-20 h-full flex flex-col justify-end">
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 bg-tertiary/20 text-tertiary text-[10px] uppercase font-bold tracking-widest rounded-full">Mobile</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-2">App Precios Agrícolas</h3>
<p className="text-on-surface-variant text-sm mb-6">Visualización de datos críticos de mercado con notificaciones push personalizadas.</p>
<a className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all" href="#">Explorar <span className="material-symbols-outlined">north_east</span></a>
</div>
</div>
{/*  Project 3  */}
<div className="glass-panel p-8 relative overflow-hidden group">
<div className="h-full flex flex-col justify-between">
<div>
<span className="px-3 py-1 bg-white/10 text-white text-[10px] uppercase font-bold tracking-widest rounded-full">Enterprise</span>
<h3 className="font-headline text-2xl font-bold mt-4 mb-2">FileBrowser Enterprise</h3>
<p className="text-on-surface-variant text-sm">Gestor de archivos seguro para infraestructuras corporativas críticas.</p>
</div>
<div className="space-y-4">
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary" data-icon="terminal">terminal</span>
<span className="material-symbols-outlined text-secondary" data-icon="storage">storage</span>
<span className="material-symbols-outlined text-tertiary" data-icon="vpn_key">vpn_key</span>
</div>
<div className="h-1 bg-white/10 w-full"><div className="h-full bg-primary w-full"></div></div>
</div>
</div>
</div>
{/*  Project 4  */}
<div className="md:col-span-2 glass-panel p-8 flex flex-col md:flex-row gap-8 items-center">
<div className="w-full md:w-1/2">
<h3 className="font-headline text-2xl font-bold mb-4">Sistemas de Monitoreo Proactivo</h3>
<p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                            Implementación de dashboards en Grafana y Prometheus para el control total de recursos de red y software, reduciendo el tiempo de respuesta ante incidentes en un 60%.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-surface-container-high text-[10px] font-mono border border-white/5">DOCKER</span>
<span className="px-2 py-1 bg-surface-container-high text-[10px] font-mono border border-white/5">KUBERNETES</span>
<span className="px-2 py-1 bg-surface-container-high text-[10px] font-mono border border-white/5">PROMETHEUS</span>
</div>
</div>
<div className="w-full md:w-1/2 h-full rounded bg-surface-container-highest flex items-center justify-center p-4">
<img className="w-full h-full object-cover rounded opacity-80" data-alt="Clean data dashboard displayed on multiple screens in a dark room with cyan and blue data visualizations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACIs30xz4S7IrPsQp7kTAJj15Sq8HFSLQuMkacobWYbPXC5MHzKcddTZUigmBmu-9KDT1lVi7tHGhbO0a8ySA6GZ4uHRmiXTy5_U4Cgdirqh-XuTIEhQwpQkSABcWMWECCycjjvTJYbjQUgZ3dw5idoFQ8S1Tvfh0HtzYTRdjHPXOeYBxRl9mt6umykB943EFQBEaW5z2sl-A7ydrkuMG-pHfFBHYzxIBe2pBj1y6Ah9mxjLVBRWZsRIz4bKAiW5drjFfHhGWhpw"/>
</div>
</div>
</div>
</section>
{/*  Technical Skills Section  */}
<section className="py-32 px-8 md:px-16 lg:px-24 bg-surface-container-low">
<h2 className="font-headline text-4xl font-bold mb-16">Stack <span className="glow-text">Tecnológico</span></h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
{/*  Telecom  */}
<div>
<h4 className="font-headline text-lg font-bold mb-8 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span> Telecom
                    </h4>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs mb-2 uppercase tracking-widest font-bold"><span>Networking (CCNA)</span><span>95%</span></div>
<div className="h-1 bg-white/5"><div className="h-full bg-primary w-[95%]"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-2 uppercase tracking-widest font-bold"><span>VoIP &amp; PBX</span><span>88%</span></div>
<div className="h-1 bg-white/5"><div className="h-full bg-primary w-[88%]"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-2 uppercase tracking-widest font-bold"><span>Wireless Systems</span><span>90%</span></div>
<div className="h-1 bg-white/5"><div className="h-full bg-primary w-[90%]"></div></div>
</div>
</div>
</div>
{/*  Desarrollo  */}
<div>
<h4 className="font-headline text-lg font-bold mb-8 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Desarrollo
                    </h4>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs mb-2 uppercase tracking-widest font-bold"><span>Full-Stack JS/TS</span><span>92%</span></div>
<div className="h-1 bg-white/5"><div className="h-full bg-secondary w-[92%]"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-2 uppercase tracking-widest font-bold"><span>Python / Go</span><span>85%</span></div>
<div className="h-1 bg-white/5"><div className="h-full bg-secondary w-[85%]"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-2 uppercase tracking-widest font-bold"><span>API Architectures</span><span>94%</span></div>
<div className="h-1 bg-white/5"><div className="h-full bg-secondary w-[94%]"></div></div>
</div>
</div>
</div>
{/*  DevOps  */}
<div>
<h4 className="font-headline text-lg font-bold mb-8 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary"></span> DevOps
                    </h4>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs mb-2 uppercase tracking-widest font-bold"><span>Linux Admin</span><span>96%</span></div>
<div className="h-1 bg-white/5"><div className="h-full bg-tertiary w-[96%]"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-2 uppercase tracking-widest font-bold"><span>Docker &amp; K8s</span><span>80%</span></div>
<div className="h-1 bg-white/5"><div className="h-full bg-tertiary w-[80%]"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-2 uppercase tracking-widest font-bold"><span>Cloud (AWS/GCP)</span><span>75%</span></div>
<div className="h-1 bg-white/5"><div className="h-full bg-tertiary w-[75%]"></div></div>
</div>
</div>
</div>
{/*  Automatización  */}
<div>
<h4 className="font-headline text-lg font-bold mb-8 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-white"></span> Automatización
                    </h4>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs mb-2 uppercase tracking-widest font-bold"><span>AI Bots (LLM)</span><span>82%</span></div>
<div className="h-1 bg-white/5"><div className="h-full bg-white w-[82%]"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-2 uppercase tracking-widest font-bold"><span>Workflow (n8n/Zapier)</span><span>90%</span></div>
<div className="h-1 bg-white/5"><div className="h-full bg-white w-[90%]"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-2 uppercase tracking-widest font-bold"><span>Industrial IoT</span><span>70%</span></div>
<div className="h-1 bg-white/5"><div className="h-full bg-white w-[70%]"></div></div>
</div>
</div>
</div>
</div>
</section>
{/*  Case Studies Section  */}
<section className="py-32 px-8 md:px-16 lg:px-24">
<h2 className="font-headline text-4xl font-bold mb-16 text-center">Historias de <span className="glow-text">Impacto</span></h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="glass-panel p-10">
<div className="text-xs uppercase tracking-widest text-primary font-bold mb-6">Caso de Estudio: Eficiencia</div>
<h3 className="font-headline text-2xl font-bold mb-6">De 8 horas semanales a 2 (Hortaline)</h3>
<p className="text-on-surface-variant mb-8 leading-relaxed">
                        Mediante la automatización de los reportes de inventario y la integración de APIs de proveedores, logramos liberar el 75% del tiempo administrativo del cliente, permitiéndoles enfocarse en la expansión comercial.
                    </p>
<div className="flex items-center gap-4">
<div className="text-4xl font-black text-primary">-75%</div>
<div className="text-[10px] uppercase font-bold text-on-surface-variant">Tiempo de gestión operativa</div>
</div>
</div>
<div className="glass-panel p-10">
<div className="text-xs uppercase tracking-widest text-secondary font-bold mb-6">Caso de Estudio: IA &amp; Telecom</div>
<h3 className="font-headline text-2xl font-bold mb-6">Bot que entiende voz</h3>
<p className="text-on-surface-variant mb-8 leading-relaxed">
                        Desarrollo de un asistente virtual integrado a la centralita VoIP que utiliza procesamiento de lenguaje natural para clasificar y derivar llamadas críticas sin intervención humana inicial.
                    </p>
<div className="flex items-center gap-4">
<div className="text-4xl font-black text-secondary">24/7</div>
<div className="text-[10px] uppercase font-bold text-on-surface-variant">Atención al cliente automatizada</div>
</div>
</div>
</div>
</section>
{/*  Pricing Section  */}
<section className="py-32 px-8 md:px-16 lg:px-24 bg-surface-container-lowest">
<div className="text-center mb-16">
<h2 className="font-headline text-4xl font-bold mb-4">Planes de <span className="glow-text">Arquitectura</span></h2>
<p className="text-on-surface-variant">Soluciones adaptadas a la escala de tu proyecto.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Básico  */}
<div className="glass-panel p-8 flex flex-col">
<div className="mb-8">
<h4 className="font-headline text-xl font-bold mb-2">Básico</h4>
<div className="text-3xl font-bold">$500+</div>
<p className="text-xs text-on-surface-variant mt-2 uppercase tracking-tighter">Consultoría inicial &amp; Fixes</p>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-center gap-2 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Diagnóstico de Red
                        </li>
<li className="flex items-center gap-2 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Optimización de Scripts
                        </li>
<li className="flex items-center gap-2 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Soporte Remoto (5h/mes)
                        </li>
</ul>
<button className="w-full py-4 border border-white/10 hover:bg-white/5 font-bold transition-all">Empezar ahora</button>
</div>
{/*  Profesional  */}
<div className="glass-panel p-8 flex flex-col ring-2 ring-primary relative scale-105">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Most Popular</div>
<div className="mb-8">
<h4 className="font-headline text-xl font-bold mb-2">Profesional</h4>
<div className="text-3xl font-bold">$1,500+</div>
<p className="text-xs text-on-surface-variant mt-2 uppercase tracking-tighter">Desarrollo &amp; Despliegue</p>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Software a Medida (Web/Bot)
                        </li>
<li className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Infraestructura de Servidores
                        </li>
<li className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Automatización de Workflows
                        </li>
<li className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Seguridad &amp; Backup
                        </li>
</ul>
<button className="w-full py-4 bg-primary text-on-primary font-bold shadow-[0_0_15px_rgba(143,245,255,0.3)] hover:shadow-[0_0_25px_rgba(143,245,255,0.5)] transition-all">Solicitar propuesta</button>
</div>
{/*  Empresarial  */}
<div className="glass-panel p-8 flex flex-col">
<div className="mb-8">
<h4 className="font-headline text-xl font-bold mb-2">Empresarial</h4>
<div className="text-3xl font-bold">$5,000+</div>
<p className="text-xs text-on-surface-variant mt-2 uppercase tracking-tighter">Ecosistema Completo</p>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-center gap-2 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Diseño de Red Nacional/Global
                        </li>
<li className="flex items-center gap-2 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Full-Stack Software Suite
                        </li>
<li className="flex items-center gap-2 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Soporte 24/7 Crítico
                        </li>
<li className="flex items-center gap-2 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            DevOps / Cloud Migration
                        </li>
</ul>
<button className="w-full py-4 border border-white/10 hover:bg-white/5 font-bold transition-all">Contactar ventas</button>
</div>
</div>
</section>
{/*  Testimonials  */}
<section className="py-32 px-8 md:px-16 lg:px-24">
<div className="flex flex-col items-center">
<span className="material-symbols-outlined text-primary text-6xl mb-8" data-icon="format_quote">format_quote</span>
<div className="max-w-3xl text-center">
<blockquote className="font-headline text-2xl md:text-3xl italic font-medium mb-12">
                        "Wladimir no solo entiende el código, entiende el negocio. Su capacidad para integrar hardware de telecomunicaciones con software moderno es una ventaja competitiva brutal."
                    </blockquote>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-surface-container-high mb-4 border border-primary/20 p-1">
<img className="w-full h-full object-cover rounded-full" data-alt="Professional portrait of a business executive with a blurred office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCufK1uV6YxvItlcU12UTOvflA2dMR6GkKYy0H17cj8Uxby9t7RSr2BYuko45qDBxMcbDcJM3e7g31QsjYY3ESY-7IGUZw6Ddw6iCn2LcZysZBiC7yNoYywvhHNIkw1qkpAoHRHS7tcjn1Mz4SwKdba8bfzdFbDB4o5L_ZrfAzvdiMQ3ZTiascTfrv0EHlSDWeaiNNRLIEBbfpsIpGBpw1_020LBBwMKXlw2riXWPfsmbRRlj2nVf3UX0oyA-qyMbveFKDcndspug"/>
</div>
<div className="font-bold">Ricardo Martínez</div>
<div className="text-xs text-on-surface-variant uppercase tracking-widest">CEO, AgriGlobal Solutions</div>
</div>
</div>
</div>
</section>
{/*  Contact Form Section  */}
<section className="py-32 px-8 md:px-16 lg:px-24 bg-surface-container-low relative">
<div className="light-leak bg-tertiary top-0 left-0"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
<div>
<h2 className="font-headline text-4xl font-bold mb-8">¿Listo para el <span className="glow-text">Siguiente Nivel?</span></h2>
<p className="text-on-surface-variant text-lg mb-12">
                        Cuéntame sobre tu desafío técnico. Ya sea una red inestable o la necesidad de una aplicación escalable, estoy aquí para construir la solución.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
</div>
<span className="font-headline">contacto@wladimiralbarran.tech</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" data-icon="location_on">location_on</span>
</div>
<span className="font-headline">Remote / Venezuela / Global</span>
</div>
</div>
</div>
<div className="glass-panel p-10">
<form onSubmit={handleFormSubmit} className="space-y-6">
<input type="hidden" name="_subject" value="Nuevo Desafío Técnico" />
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Nombre</label>
<input name="nombre" value={formData.nombre} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary py-3 px-4 text-on-surface" type="text" required/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Correo Electrónico</label>
<input name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary py-3 px-4 text-on-surface" type="email" required/>
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Tipo de Problema</label>
<select name="tipoProblema" value={formData.tipoProblema} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary py-3 px-4 text-on-surface">
<option>Redes / Telecom</option>
<option>Software a Medida</option>
<option>Automatización / IA</option>
<option>Consultoría General</option>
</select>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Descripción del Desafío</label>
<textarea name="descripcion" value={formData.descripcion} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary py-3 px-4 text-on-surface" rows="4" required></textarea>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Presupuesto Estimado</label>
<select name="presupuesto" value={formData.presupuesto} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary py-3 px-4 text-on-surface">
<option>$500 - $1,500</option>
<option>$1,500 - $5,000</option>
<option>$5,000+</option>
</select>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Timeline</label>
<input name="timeline" value={formData.timeline} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary py-3 px-4 text-on-surface" placeholder="e.g. 1 mes" type="text"/>
</div>
</div>
<button type="submit" disabled={isSubmitting} className="w-full py-4 bg-secondary text-white font-bold uppercase tracking-widest hover:brightness-110 transition-all cursor-pointer">{isSubmitting ? "Enviando..." : "Enviar Desafío"}</button>
</form>
</div>
</div>
</section>
{/*  FAQ Section  */}
<section className="py-32 px-8 md:px-16 lg:px-24">
<h2 className="font-headline text-3xl font-bold mb-12">Preguntas <span className="text-tertiary">Frecuentes</span></h2>
<div className="space-y-4 max-w-4xl">
<details className="glass-panel group">
<summary className="p-6 cursor-pointer list-none flex justify-between items-center font-bold">
                        ¿Trabajas con clientes internacionales?
                        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-6 pb-6 text-on-surface-variant text-sm">
                        Sí, he trabajado con equipos en diversas partes del mundo de forma remota, utilizando herramientas de orquestación y comunicación modernas para asegurar que la geografía no sea una barrera.
                    </div>
</details>
<details className="glass-panel group">
<summary className="p-6 cursor-pointer list-none flex justify-between items-center font-bold">
                        ¿Qué stacks tecnológicos utilizas principalmente?
                        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-6 pb-6 text-on-surface-variant text-sm">
                        Mi enfoque principal es TypeScript (Node.js/Next.js), Python para IA y automatización, y Go para sistemas de alto rendimiento. En infraestructura, soy experto en redes Cisco, Mikrotik y despliegues con Docker/Kubernetes.
                    </div>
</details>
<details className="glass-panel group">
<summary className="p-6 cursor-pointer list-none flex justify-between items-center font-bold">
                        ¿Ofreces mantenimiento post-despliegue?
                        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-6 pb-6 text-on-surface-variant text-sm">
                        Totalmente. Entiendo que un sistema vivo necesita evolución. Ofrezco planes de mantenimiento profesional para garantizar la seguridad y actualización constante de las soluciones entregadas.
                    </div>
</details>
</div>
</section>
{/*  Blog Snippets  */}
<section className="py-32 px-8 md:px-16 lg:px-24 bg-surface-dim" id="insights">
<div className="flex justify-between items-end mb-16">
<h2 className="font-headline text-4xl font-bold">Technical <span className="glow-text">Insights</span></h2>
<a className="text-primary text-xs font-bold uppercase tracking-widest border-b border-primary/20 pb-1" href="#">Ver todos</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<article className="group cursor-pointer">
<div className="aspect-video overflow-hidden mb-6 rounded-lg">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close-up of a server rack with glowing blue and green status lights in a dark data center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiB9H-ru6PUpBNLM-b17imqX9CknYhI5UxGuJCmpmFq3zfGxzi0cvcx6QDjBMA1Wf2Lv5P8zPCDiMEOhevzqdTUJAGz03fM7k1XLaGmcV5f8Tdb3KchqDGiC536jCdVVd4f3vLUpH8rdyqBpLU2OGpIDMbh3fiO7VdfUBRv-emKfShAVQO0c1JD8zgOKDqJhi67JxDoXqIgmH81vkpb6aLDbeAXDDcvVaofw-ZL3XbXSIxxj4VIWarpyjlquKRf-2l_leGwZV96A"/>
</div>
<div className="text-xs text-secondary font-bold mb-2 uppercase tracking-widest">Network Architecture</div>
<h4 className="font-headline text-xl font-bold mb-4 group-hover:text-primary transition-colors">Micro-segmentación de redes para mayor seguridad</h4>
<p className="text-on-surface-variant text-sm line-clamp-2">Aprende cómo dividir tu red corporativa puede prevenir el movimiento lateral de amenazas...</p>
</article>
<article className="group cursor-pointer">
<div className="aspect-video overflow-hidden mb-6 rounded-lg">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Abstract visualization of an artificial intelligence neural network with glowing connections and nodes in magenta and teal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApi-GLrxcbbUaoEQ6VCAhTlZIm_xX11VY7N3qQZIdkdkhVIKQxswJTFwLfWdHhSHhFrmZGFlS5Z020XnODUfzn4GU1LXZ2sv7lm1CqG5lTrlR5baJ2eFfQPREmNN_E3FnyF2e1txdzPflb_KbBMDqu3SafXOholdai5yk1EQ2UMMnHqs64bz41B3xP3eCy6kaebxHuXR6xypevFQwSwodD_9fmz0qN0Errh_bipcmT8012dyF6rANGjGL5B8YtY7VTk6NgTSijdg"/>
</div>
<div className="text-xs text-secondary font-bold mb-2 uppercase tracking-widest">AI &amp; Automation</div>
<h4 className="font-headline text-xl font-bold mb-4 group-hover:text-primary transition-colors">Integrando LLMs en workflows empresariales</h4>
<p className="text-on-surface-variant text-sm line-clamp-2">No se trata solo de chatear, se trata de automatizar decisiones complejas con IA...</p>
</article>
<article className="group cursor-pointer">
<div className="aspect-video overflow-hidden mb-6 rounded-lg">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Elegant glowing abstract particle wave representing high-speed digital data transmission in dark space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLbMQrp7WZte9HapfTG3XOGvRe9Hu2f8yZ-cCXnNmHY9IW3nwnCwmctaooDo5boO7NrOMWxigp-LHvENU1kc2t6pj82-tcqBQt5kh1TCB1nyD1y7YVZzVL5phixObWlZjpZXdVvln5NNFZayTMewbKKgKjZbz34LhIFY217nQFEdoEANqjoNQXUnCvik6smJslPYrvJUWo0rIPjMQZVvbOs2Wm6LJrYfl48_hgZ9_VcnrfSw9SFz7su7ZqGaTTrsv3BYsNKg5Bqg"/>
</div>
<div className="text-xs text-secondary font-bold mb-2 uppercase tracking-widest">DevOps</div>
<h4 className="font-headline text-xl font-bold mb-4 group-hover:text-primary transition-colors">Kubernetes para proyectos en solitario: ¿Vale la pena?</h4>
<p className="text-on-surface-variant text-sm line-clamp-2">Desmitificando la sobrecarga operativa de K8s para proyectos de mediano tamaño...</p>
</article>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-[#0c0e12] border-t border-indigo-500/20 w-full py-12 flex flex-col md:flex-row justify-between items-center px-12 gap-6 font-['Manrope'] text-sm uppercase tracking-widest">
<div className="text-cyan-400 font-bold">NET_ARCHITECT</div>
<div className="text-slate-500 text-center md:text-left">© 2024 NEON-EDITORIAL FRAMEWORK | TELECOM &amp; FULL-STACK SYSTEMS</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-magenta-400 transition-colors" href="#">Github</a>
<a className="text-slate-500 hover:text-magenta-400 transition-colors" href="#">LinkedIn</a>
<a className="text-slate-500 hover:text-magenta-400 transition-colors" href="#">Network Status</a>
<a className="text-slate-500 hover:text-magenta-400 transition-colors" href="#">Privacy</a>
</div>
</footer>

    </div>
  );
}

export default App;
