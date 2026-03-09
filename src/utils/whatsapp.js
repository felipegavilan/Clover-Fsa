
//función whatsapp

export const generarLinkWhatsApp = (product) => {
  const telefono = "543704083000"; 
  const mensaje = `Hola, quiero comprar: *${product.name}* que cuesta $${product.price}. ¿Me das más información?`;
  
  // encodeURIComponent convierte espacios y caracteres especiales a un formato de URL válido
  return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
};