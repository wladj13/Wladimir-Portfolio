import re

def convert_html_to_jsx(html):
    # Match everything inside body
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
    if not body_match:
        return "Body not found."
    
    content = body_match.group(1)
    
    # 1. Replace class= with className=
    content = re.sub(r'\bclass=', 'className=', content)
    
    # 2. Add self-closing to standard void elements: input, img, br, hr
    content = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', content)
    content = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', content)
    content = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', content)
    content = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', content)
    
    # 3. Handle specific form tags - remove action method
    content = re.sub(r'<form action="[^"]*" method="POST"', r'<form onSubmit={handleFormSubmit}', content)
    
    # 4. Integrate state into form fields
    # Text/email/tel inputs
    content = re.sub(r'<input name="nombre"([^>]+)/>', 
                     r'<input name="nombre" value={formData.nombre} onChange={handleInputChange}\1/>', content)
    content = re.sub(r'<input name="email"([^>]+)/>', 
                     r'<input name="email" value={formData.email} onChange={handleInputChange}\1/>', content)
    content = re.sub(r'<input name="timeline"([^>]+)/>', 
                     r'<input name="timeline" value={formData.timeline} onChange={handleInputChange}\1/>', content)
    
    # Selects
    content = re.sub(r'<select name="tipoProblema"([^>]+)>', 
                     r'<select name="tipoProblema" value={formData.tipoProblema} onChange={handleInputChange}\1>', content)
    content = re.sub(r'<select name="presupuesto"([^>]+)>', 
                     r'<select name="presupuesto" value={formData.presupuesto} onChange={handleInputChange}\1>', content)
    
    # Textarea
    content = re.sub(r'<textarea name="descripcion"([^>]+)></textarea>', 
                     r'<textarea name="descripcion" value={formData.descripcion} onChange={handleInputChange}\1></textarea>', content)
    
    # Submit Button disabled state
    content = re.sub(r'<button type="submit"([^>]+)>(.*?)</button>', 
                     r'<button type="submit" disabled={isSubmitting}\1>{isSubmitting ? "Enviando..." : "\2"}</button>', content)

    # 5. Fix remaining "class=" that might be inside comments (doesn't matter)
    # Fix HTML comments to JSX comments
    content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', content)

    # 6. Add style={{}} for inline styles if there are any (none really here).
    
    return content

with open(r'c:\Users\wlial\OneDrive\Documentos\BrandingWeb\code.html', 'r', encoding='utf-8') as f:
    html = f.read()

jsx_content = convert_html_to_jsx(html)

app_template = f"""import React, {{ useState }} from 'react';

function App() {{
  const [formData, setFormData] = useState({{
    nombre: '',
    email: '',
    tipoProblema: 'Redes / Telecom',
    descripcion: '',
    presupuesto: '$500 - $1,500',
    timeline: ''
  }});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {{
    const {{ name, value }} = e.target;
    setFormData(prev => ({{ ...prev, [name]: value }}));
  }};

  const handleFormSubmit = async (e) => {{
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.descripcion) {{
      alert('Por favor, completa al menos tu nombre, correo y la descripción.');
      return;
    }}

    setIsSubmitting(true);
    
    try {{
      const res = await fetch("https://formsubmit.co/ajax/contacto@wladimiralbarran.me", {{
        method: "POST",
        headers: {{ 
          "Content-Type": "application/json",
          "Accept": "application/json"
        }},
        body: JSON.stringify({{
          nombre: formData.nombre,
          correo: formData.email,
          tipoProblema: formData.tipoProblema,
          descripcion: formData.descripcion,
          presupuesto: formData.presupuesto,
          timeline: formData.timeline,
          _subject: `Nuevo Desafío Técnico de: ${{formData.nombre}}`
        }})
      }});
      
      if (res.ok) {{
        alert("¡Mensaje enviado con éxito!");
        setFormData({{
          nombre: '',
          email: '',
          tipoProblema: 'Redes / Telecom',
          descripcion: '',
          presupuesto: '$500 - $1,500',
          timeline: ''
        }});
      }} else {{
        alert("Hubo un error al enviar el mensaje.");
      }}
    }} catch (error) {{
      alert("Error de conexión al enviar el formulario.");
    }} finally {{
      setIsSubmitting(false);
    }}
  }};

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 selection:text-primary min-h-screen">
      {{/* Contenido de code.html */}}
      {jsx_content}
    </div>
  );
}}

export default App;
"""

with open(r'c:\Users\wlial\OneDrive\Documentos\BrandingWeb\app\src\App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_template)

print("Conversion complete!")
