import React from 'react';

export function TeamAuth({ cantidadPersonas, imagenesUrls }) {
  // Filtrar la cantidad de imágenes basado en la cantidad de personas
  const imagenesMostradas = imagenesUrls.slice(0, cantidadPersonas);

  return (
    <div className="team-auth-container flex gap-2">
      {imagenesMostradas.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Persona ${index + 1}`}
          className=" rounded-[50%] h-8 w-8"
        />
      ))}
    </div>
  );
}
