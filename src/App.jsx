import React, { useState, useEffect } from 'react';

// ==========================================
// DICCIONARIO DE TRADUCCIONES
// ==========================================
const traducciones = {
  ES: {
    inicio: "Inicio",
    tendencias: "Tendencias",
    miLista: "Mi Lista",
    ingresar: "Ingresar",
    tituloHero: <>Tu próximo <span className="text-cyan-400">estreno</span> comienza aquí.</>,
    placeholderBusqueda: "Escribe tu película...",
    ruletaGirar: "🎰 ¡Girando la ruleta del destino! 🎰",
    ruletaSuerte: "🤔 ¿Qué veo hoy? ¡Dejarlo a la suerte!",
    mejorRating: "⭐ Mejor Rating primero",
    todas: "TODAS",
    accion: "ACCIÓN",
    comedia: "COMEDIA",
    drama: "DRAMA",
    cienciaFiccion: "CIENCIA FICCIÓN",
    tendenciasGlobales: "🔥 Tendencias Globales",
    tendenciasConectando: "Conectando con Hollywood...",
    coleccionDe: "📂 Colección de",
    listaVacia: "Tu lista está vacía actualmente.",
    ruletaError: "Las carteleras de internet están tardando en responder. ¡Intenta de nuevo!",
    errorNoTitulos: "No encontramos títulos en esta categoría.",
    errorConexion: "Hubo un problema de conexión con el servidor.",
    invitado: "Invitado",
    cargandoDetalles: "Cargando sinopsis and reparto...",
    errorDetalles: "No encontramos más información detallada sobre este título.",
    errorDetallesConexion: "Ocurrió un problema al conectar con el servidor de detalles.",
    sinopsis: "Sinopsis",
    sinSinopsis: "No hay sinopsis disponible para esta película.",
    director: "Director",
    elenco: "Elenco",
    generoG: "General",
    desconocido: "Desconocido",
    noEspecificado: "No especificado",
    noDisponible: "No disponible",
    resenasComunidad: "Reseñas de la Comunidad",
    comentandoComo: "Comentando como:",
    placeholderResena: "Comparte tu opinión experta sobre esta película...",
    publicarOpinion: "Publicar Opinión",
    quieresComentar: "¿Quieres calificar o comentar esta película?",
    iniciaSesionAqui: "Inicia sesión con tu cuenta ingresando aquí",
    seElPrimero: "Nadie ha dejado una reseña todavía. ¡Sé el primero!",
    iniciarSesionTab: "Iniciar Sesión",
    registrarseTab: "Registrarse",
    errorCompletar: "❌ Debes completar todos los campos.",
    errorExiste: "❌ Este nombre de usuario ya existe.",
    exitoCuenta: "🎉 ¡Cuenta creada con éxito!",
    errorCredenciales: "❌ Usuario o contraseña incorrectos.",
    errorIngresaAmbos: "❌ Ingresa usuario y contraseña.",
    labelUsuario: "Usuario",
    labelCorreo: "Correo",
    labelNacimiento: "Nacimiento",
    labelGenero: "Género",
    labelPassword: "Contraseña",
    btnCompletarRegistro: "Completar Registro",
    btnEntrar: "Entrar",
    selectGenero: "Selecciona",
    generoFem: "Femenino",
    generoMasc: "Masculino",
    generoNoDecir: "Prefiero no decirlo"
  },
  EN: {
    inicio: "Home",
    tendencias: "Trending",
    miLista: "My List",
    ingresar: "Sign In",
    tituloHero: <>Your next <span className="text-cyan-400">premiere</span> starts here.</>,
    placeholderBusqueda: "Search for a movie...",
    ruletaGirar: "🎰 Spinning the wheel of destiny! 🎰",
    ruletaSuerte: "🤔 What should I watch? Let's get lucky!",
    mejorRating: "⭐ Best Rating first",
    todas: "ALL",
    accion: "ACTION",
    comedia: "COMEDY",
    drama: "DRAMA",
    cienciaFiccion: "SCI-FI",
    tendenciasGlobales: "🔥 Global Trends",
    tendenciasConectando: "Connecting to Hollywood...",
    coleccionDe: "📂 Collection of",
    listaVacia: "Your list is currently empty.",
    ruletaError: "Internet billboards are taking too long to respond. Try again!",
    errorNoTitulos: "No titles found in this category.",
    errorConexion: "There was a connection issue with the server.",
    invitado: "Guest",
    cargandoDetalles: "Loading synopsis and cast...",
    errorDetalles: "We couldn't find more detailed information for this title.",
    errorDetallesConexion: "An error occurred connecting to the details server.",
    sinopsis: "Synopsis",
    sinSinopsis: "No synopsis available for this movie.",
    director: "Director",
    elenco: "Cast",
    generoG: "General",
    desconocido: "Unknown",
    noEspecificado: "Not specified",
    noDisponible: "Not available",
    resenasComunidad: "Community Reviews",
    comentandoComo: "Commenting as:",
    placeholderResena: "Share your expert opinion on this movie...",
    publicarOpinion: "Publish Opinion",
    quieresComentar: "Want to rate or review this movie?",
    iniciaSesionAqui: "Sign in with your account by clicking here",
    seElPrimero: "No one has left a review yet. Be the first!",
    iniciarSesionTab: "Sign In",
    registrarseTab: "Sign Up",
    errorCompletar: "❌ You must fill in all fields.",
    errorExiste: "❌ This username already exists.",
    exitoCuenta: "🎉 Account created successfully!",
    errorCredenciales: "❌ Incorrect username or password.",
    errorIngresaAmbos: "❌ Enter username and password.",
    labelUsuario: "Username",
    labelCorreo: "Email",
    labelNacimiento: "Birthdate",
    labelGenero: "Gender",
    labelPassword: "Password",
    btnCompletarRegistro: "Complete Registration",
    btnEntrar: "Enter",
    selectGenero: "Select",
    generoFem: "Female",
    generoMasc: "Male",
    generoNoDecir: "Prefer not to say"
  },
  IT: {
    inicio: "Inizio",
    tendencias: "Tendenze",
    miLista: "La mia lista",
    ingresar: "Accedi",
    
    tituloHero: <>La tua prossima <span className="text-cyan-400">prima</span> inizia qui.</>,
    placeholderBusqueda: "Cerca un film...",
    ruletaGirar: "🎰 Girando la ruota del destino! 🎰",
    ruletaSuerte: "🤔 Cosa guardo oggi? Lasciamo fare alla fortuna!",
    mejorRating: "⭐ Miglior Rating prima",
    todas: "TUTTE",
    accion: "AZIONE",
    comedia: "COMMEDIA",
    drama: "DRAMMA",
    cienciaFiccion: "FANTASCIENZA",
    tendenciasGlobales: "🔥 Tendenze Globali",
    tendenciasConectando: "Connessione con Hollywood...",
    coleccionDe: "📂 Collezione di",
    listaVacia: "La tua lista è attualmente vuota.",
    ruletaError: "I cartelloni web impiegano troppo tempo a rispondere. Riprova!",
    errorNoTitulos: "Nessun titolo trovato in questa categoria.",
    errorConexion: "Si è verificato un problema di connessione con il server.",
    invitado: "Ospite",
    cargandoDetalles: "Caricamento trama e cast...",
    errorDetalles: "Non siamo riusciti a trovare maggiori informazioni su questo titolo.",
    errorDetallesConexion: "Si è verificato un errore di connessione al server dei dettagli.",
    sinopsis: "Sinossi",
    sinSinopsis: "Nessuna sinossi disponibile per questo film.",
    director: "Regista",
    elenco: "Cast",
    generoG: "Generale",
    desconocido: "Sconosciuto",
    noEspecificado: "Non specificato",
    noDisponible: "Non disponibile",
    resenasComunidad: "Recensioni della Community",
    comentandoComo: "Commentando come:",
    placeholderResena: "Condividi la tua opinione esperta su questo film...",
    publicarOpinion: "Pubblica Opinione",
    quieresComentar: "Vuoi valutare o recensire questo film?",
    iniciaSesionAqui: "Accedi con il tuo account cliccando qui",
    seElPrimero: "Nessuno ha ancora lasciato una recensione. Sii il primo!",
    iniciarSesionTab: "Accedi",
    registrarseTab: "Registrati",
    errorCompletar: "❌ È necessario compilare tutti i campi.",
    errorExiste: "❌ Questo nome utente esiste già.",
    exitoCuenta: "🎉 Account creato con successo!",
    errorCredenciales: "❌ Nome utente o password errati.",
    errorIngresaAmbos: "❌ Inserisci nome utente e password.",
    labelUsuario: "Nome utente",
    labelCorreo: "Email",
    labelNacimiento: "Data di nascita",
    labelGenero: "Genere",
    labelPassword: "Password",
    btnCompletarRegistro: "Completa la registrazione",
    btnEntrar: "Entra",
    selectGenero: "Seleziona",
    generoFem: "Femminile",
    generoMasc: "Maschile",
    generoNoDecir: "Preferisco non dirlo"
  }
};

// COMPONENTE: MODAL DE DETALLES//
function MovieDetailModal({ isOpen, onClose, peliculaTitulo, usuarioActivo, onAbrirLogin, t }) {
  const [detalles, setDetalles] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const [comentarioTexto, setComentarioTexto] = useState("");
  const [estrellasSeleccionadas, setEstrellasSeleccionadas] = useState(5);
  const [listaResenas, setListaResenas] = useState([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !peliculaTitulo) return;

    setComentarioTexto("");
    setEstrellasSeleccionadas(5);

    const comentariosExistentes = JSON.parse(localStorage.getItem(`resenas_${peliculaTitulo.toLowerCase()}`)) || [];
    setListaResenas(comentariosExistentes);

    const cargarDetallesDesdeInternet = async () => {
      setCargando(true);
      setError(null);
      try {
        const terminoFormateado = encodeURIComponent(peliculaTitulo.trim());
        const respuesta = await fetch(`https://www.omdbapi.com/?t=${terminoFormateado}&plot=full&apikey=2f6435d9`);
        const datos = await respuesta.json();

        if (datos.Response === "True") {
          setDetalles(datos);
        } else {
          setError(t.errorDetalles);
        }
      } catch (err) {
        setError(t.errorDetallesConexion);
      } finally {
        setCargando(false);
      }
    };

    cargarDetallesDesdeInternet();
  }, [isOpen, peliculaTitulo, t]);

  const manejarEnvioResena = (e) => {
    e.preventDefault();
    if (!comentarioTexto.trim()) return;

    const nuevaResena = {
      usuario: usuarioActivo,
      estrellas: estrellasSeleccionadas,
      texto: comentarioTexto.trim(),
      fecha: new Date().toLocaleDateString()
    };

    const historialActualizado = [nuevaResena, ...listaResenas];
    setListaResenas(historialActualizado);
    localStorage.setItem(`resenas_${peliculaTitulo.toLowerCase()}`, JSON.stringify(historialActualizado));
    setComentarioTexto("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl shadow-2xl relative my-8 overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        
        <button onClick={onClose} className="absolute top-4 right-4 z-50 bg-slate-950/60 p-2 rounded-full text-slate-400 hover:text-white text-md transition">✕</button>

        {cargando && (
          <div className="w-full h-96 flex flex-col items-center justify-center p-10">
            <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-400 font-medium text-sm">{t.cargandoDetalles}</p>
          </div>
        )}

        {error && !cargando && (
          <div className="w-full p-10 text-center text-slate-400 text-sm">❌ {error}</div>
        )}

        {!cargando && !error && detalles && (
          <>
            <div className="w-full md:w-1/3 bg-slate-950 relative hidden md:block">
              <img 
                src={detalles.Poster !== "N/A" ? detalles.Poster : "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&auto=format&fit=crop&q=60"} 
                alt={detalles.Title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col overflow-y-auto max-h-[90vh] md:max-h-[80vh]">
              <div>
                <span className="bg-cyan-500/10 text-cyan-400 text-xs font-bold px-2.5 py-1 rounded-md border border-cyan-500/20 inline-block mb-3">
                  {detalles.Genre !== "N/A" ? detalles.Genre : t.generoG}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">{detalles.Title}</h2>
                
                <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-400 mb-6">
                  <span>📅 {detalles.Released !== "N/A" ? detalles.Released : t.noDisponible}</span>
                  <span>⏱️ {detalles.Runtime !== "N/A" ? detalles.Runtime : t.desconocido}</span>
                  <span className="text-amber-400">⭐ {detalles.imdbRating !== "N/A" ? detalles.imdbRating : "7.0"} / 10</span>
                </div>

                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">{t.sinopsis}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/60">
                  {detalles.Plot !== "N/A" ? detalles.Plot : t.sinSinopsis}
                </p>

                <div className="space-y-2 text-sm border-t border-slate-800/80 pt-4 mb-8">
                  <p className="text-slate-400"><strong className="text-slate-200">{t.director}:</strong> {detalles.Director !== "N/A" ? detalles.Director : t.desconocido}</p>
                  <p className="text-slate-400"><strong className="text-slate-200">{t.elenco}:</strong> {detalles.Actors !== "N/A" ? detalles.Actors : t.noEspecificado}</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span>💬</span> {t.resenasComunidad} ({listaResenas.length})
                </h3>

                {usuarioActivo ? (
                  <form onSubmit={manejarEnvioResena} className="bg-slate-950/50 border border-slate-800 p-4 rounded-xl mb-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">{t.comentandoComo} <strong className="text-cyan-400">{usuarioActivo}</strong></span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setEstrellasSeleccionadas(num)}
                            className={`text-lg transition ${num <= estrellasSeleccionadas ? 'text-amber-400 scale-110' : 'text-slate-600'}`}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                    </div>
                    <textarea
                      required
                      rows="2"
                      placeholder={t.placeholderResena}
                      className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-slate-500 resize-none"
                      value={comentarioTexto}
                      onChange={(e) => setComentarioTexto(e.target.value)}
                    />
                    <div className="flex justify-end">
                      <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold px-4 py-2 rounded-lg transition shadow-md">
                        {t.publicarOpinion}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-slate-950/40 border border-dashed border-slate-800 rounded-xl p-4 text-center mb-6">
                    <p className="text-slate-400 text-xs mb-2">{t.quieresComentar}</p>
                    <button
                      type="button"
                      onClick={() => { onClose(); onAbrirLogin(); }}
                      className="text-cyan-400 hover:text-cyan-300 font-bold text-xs underline transition"
                    >
                      {t.iniciaSesionAqui}
                    </button>
                  </div>
                )}

                <div className="space-y-3">
                  {listaResenas.length === 0 ? (
                    <p className="text-slate-500 text-xs italic py-4 text-center">{t.seElPrimero}</p>
                  ) : (
                    listaResenas.map((resena, i) => (
                      <div key={i} className="bg-slate-800/40 border border-slate-800/60 p-3.5 rounded-xl flex flex-col gap-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-300">👤 {resena.usuario}</span>
                          <span className="text-slate-500 text-[11px]">{resena.fecha}</span>
                        </div>
                        <div className="text-amber-400 text-xs">
                          {"★".repeat(resena.estrellas)}{"☆".repeat(5 - resena.estrellas)}
                        </div>
                        <p className="text-slate-400 text-sm">{resena.texto}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function CategoryBadge({ nombre }) {
  return (
    <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-2 py-1 rounded-md border border-cyan-500/30 mr-2 inline-block">
      {nombre}
    </span>
  );
}

function MovieCard({ pelicula, esFavorita, onAlternarFavorito, onVerDetalles }) {
  const { titulo, rating, genero, imagen } = pelicula;
  const claquetaProfesional = "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&auto=format&fit=crop&q=60";
  const ratingVisual = !rating || rating === "N/A" ? "7.0" : rating;

  return (
    <div 
      onClick={() => onVerDetalles(titulo)}
      className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-lg flex flex-col h-full border border-slate-700/50 relative group"
    >
      <button 
        onClick={(e) => { e.stopPropagation(); onAlternarFavorito(pelicula); }}
        className="absolute top-3 right-3 z-10 bg-slate-900/80 backdrop-blur-md p-2 rounded-full border border-slate-700/50 hover:scale-110 transition shadow-md"
      >
        <span className={`text-xl ${esFavorita ? "text-rose-500" : "text-slate-400 hover:text-rose-400"}`}>
          {esFavorita ? "❤️" : "🤍"}
        </span>
      </button>

      <div className="h-72 overflow-hidden bg-slate-900 relative flex items-center justify-center">
        <img 
          src={imagen && imagen !== "N/A" ? imagen : claquetaProfesional} 
          alt={titulo} 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src = claquetaProfesional; }}
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <CategoryBadge nombre={genero} />
          <h3 className="font-bold text-lg text-white mt-2 line-clamp-2">{titulo}</h3>
        </div>
        <p className="text-cyan-400 mt-2 font-medium">⭐ {ratingVisual}</p>
      </div>
    </div>
  );
}

function LoginModal({ isOpen, onClose, onLoginExitoso, t }) {
  const [esRegistro, setEsRegistro] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [correo, setCorreo] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [genero, setGenero] = useState("");
  const [errorAuth, setErrorAuth] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");

  const hoy = new Date();
  const maxFecha = hoy.toISOString().split("T")[0];

  if (!isOpen) return null;

  const cambiarPestana = (registro) => {
    setEsRegistro(registro);
    setErrorAuth("");
    setMensajeExito("");
    setUsuario("");
    setPassword("");
    setCorreo("");
    setFechaNacimiento("");
    setGenero("");
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    setErrorAuth("");
    setMensajeExito("");

    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios_cinemaster')) || {};

    if (esRegistro) {
      if (!usuario.trim() || !password.trim() || !correo.trim() || !fechaNacimiento || !genero) {
        setErrorAuth(t.errorCompletar);
        return;
      }
      if (usuariosRegistrados[usuario.toLowerCase()]) {
        setErrorAuth(t.errorExiste);
        return;
      }

      usuariosRegistrados[usuario.toLowerCase()] = { nombre: usuario, password, correo, fechaNacimiento, genero };
      localStorage.setItem('usuarios_cinemaster', JSON.stringify(usuariosRegistrados));
      
      setMensajeExito(t.exitoCuenta);
      setTimeout(() => { cambiarPestana(false); }, 1500);
    } else {
      if (!usuario.trim() || !password.trim()) {
        setErrorAuth(t.errorIngresaAmbos);
        return;
      }

      const usuarioEncontrado = usuariosRegistrados[usuario.toLowerCase()];
      if (!usuarioEncontrado || usuarioEncontrado.password !== password) {
        setErrorAuth(t.errorCredenciales);
        return;
      }

      onLoginExitoso(usuarioEncontrado.nombre);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full max-w-md shadow-2xl relative my-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl">✕</button>
        
        <div className="flex justify-center space-x-6 mb-6 border-b border-slate-800 pb-3">
          <button type="button" className={`text-lg font-bold pb-1 ${!esRegistro ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400'}`} onClick={() => cambiarPestana(false)}>{t.iniciarSesionTab}</button>
          <button type="button" className={`text-lg font-bold pb-1 ${esRegistro ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400'}`} onClick={() => cambiarPestana(true)}>{t.registrarseTab}</button>
        </div>

        {errorAuth && <p className="text-rose-400 text-sm text-center mb-4 bg-rose-500/10 py-2 rounded-xl font-medium">{errorAuth}</p>}
        {mensajeExito && <p className="text-emerald-400 text-sm text-center mb-4 bg-emerald-500/10 py-2 rounded-xl font-medium">{mensajeExito}</p>}

        <form onSubmit={manejarSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">{t.labelUsuario}</label>
            <input type="text" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
          </div>

          {esRegistro && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">{t.labelCorreo}</label>
                <input type="email" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" value={correo} onChange={(e) => setCorreo(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">{t.labelNacimiento}</label>
                <input type="date" required max={maxFecha} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 scheme-dark" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">{t.labelGenero}</label>
                <select required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" value={genero} onChange={(e) => setGenero(e.target.value)}>
                  <option value="" disabled hidden>{t.selectGenero}</option>
                  <option value="FEMENINO">{t.generoFem}</option>
                  <option value="MASCULINO">{t.generoMasc}</option>
                  <option value="PREFIERO NO DECIRLO">{t.generoNoDecir}</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">{t.labelPassword}</label>
            <input type="password" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl transition shadow-lg">
            {esRegistro ? t.btnCompletarRegistro : t.btnEntrar}
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [idioma, setIdioma] = useState("ES"); 
  const t = traducciones[idioma]; 

  const [textoBuscado, setTextoBuscado] = useState("");
  const [catalogoPeliculas, setCatalogoPeliculas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [errorApi, setErrorApi] = useState(null);

  const [modalAbierto, setModalAbierto] = useState(false);
  const [usuarioActivo, setUsuarioActivo] = useState(null);
  const [seccionActiva, setSeccionActiva] = useState("inicio");

  const [favoritos, setFavoritos] = useState([]);
  const [peliculasTendencia, setPeliculasTendencia] = useState([]);

  const [peliSeleccionadaTitulo, setPeliSeleccionadaTitulo] = useState(null);
  const [modalDetalleAbierto, setModalDetalleAbierto] = useState(false);

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("TODAS");
  const [ordenarPorRating, setOrdenarPorRating] = useState(false);

  const [girandoRuleta, setGirandoRuleta] = useState(false);

  const mapeoPalabrasClaveOMDb = {
    "TODAS": "world",
    "ACCIÓN": "kill",
    "COMEDIA": "comedy",
    "DRAMA": "life",
    "CIENCIA FICCIÓN": "space"
  };

  const buscarPeliculasEnInternet = async (busqueda, generoFiltro = "TODAS") => {
    let terminoFinal = busqueda.trim();
    if (!terminoFinal) {
      terminoFinal = mapeoPalabrasClaveOMDb[generoFiltro] || "movie";
    }

    setCargando(true);
    setErrorApi(null);
    try {
      const terminoFormateado = terminoFinal.replace(/\s+/g, '+');
      const respuesta = await fetch(`https://www.omdbapi.com/?s=${terminoFormateado}&type=movie&apikey=2f6435d9`);
      const datos = await respuesta.json();

      if (datos.Response === "True") {
        const resultados = datos.Search
          .filter(peli => peli.Poster && peli.Poster !== "N/A" && peli.Title)
          .map((peli, index) => {
            let generoAsignado = generoFiltro;
            if (generoFiltro === "TODAS") {
              const generosDisponibles = ["ACCIÓN", "COMEDIA", "DRAMA", "CIENCIA FICCIÓN"];
              generoAsignado = generosDisponibles[index % generosDisponibles.length];
            }

            const codigoUnico = peli.Title.charCodeAt(0) + peli.Title.charCodeAt(peli.Title.length - 1 || 0);
            const ratingCalculado = (6.0 + (codigoUnico % 36) / 10).toFixed(1);

            return {
              titulo: peli.Title,
              rating: ratingCalculado, 
              genero: generoAsignado,
              imagen: peli.Poster
            };
          });
        setCatalogoPeliculas(resultados);
        return resultados;
      } else {
        setCatalogoPeliculas([]);
        setErrorApi(t.errorNoTitulos);
      }
    } catch (error) {
      setErrorApi(t.errorConexion);
    } finally {
      setCargando(false);
    }
    return [];
  };

  const cargarTendenciasMundiales = async () => {
    const TMDB_API_KEY = "d7f329489f2b35211a422c7d7cd79af3"; 
    try {
      const respuesta = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}&language=es-ES`);
      const datos = await respuesta.json();

      if (datos.results && datos.results.length > 0) {
        const mapeoGenerosTMDB = (ids) => {
          if (!ids || ids.length === 0) return "DRAMA";
          if (ids.includes(28) || ids.includes(12) || ids.includes(53)) return "ACCIÓN";
          if (ids.includes(35) || ids.includes(10402)) return "COMEDIA";
          if (ids.includes(878) || ids.includes(14)) return "CIENCIA FICCIÓN";
          return "DRAMA"; 
        };

        const resultadosFormateados = datos.results
          .filter(peli => peli.title && peli.poster_path)
          .map(peli => {
            const valorVoto = peli.vote_average && peli.vote_average > 0 ? peli.vote_average.toFixed(1) : "7.2";
            return {
              titulo: peli.title,
              rating: valorVoto,
              genero: mapeoGenerosTMDB(peli.genre_ids),
              imagen: `https://image.tmdb.org/t/p/w500${peli.poster_path}`
            };
          });

        setPeliculasTendencia(resultadosFormateados);
        return resultadosFormateados; 
      }
    } catch (error) {
      console.error("Error cargando tendencias de fondo:", error);
    }
    return [];
  };

  const activarRuletaDelDestino = async () => {
    if (girandoRuleta) return;
    setGirandoRuleta(true);

    let bolsaDePeliculas = [...peliculasTendencia];

    if (bolsaDePeliculas.length === 0) {
      bolsaDePeliculas = await cargarTendenciasMundiales();
    }

    if (bolsaDePeliculas.length === 0) {
      bolsaDePeliculas = catalogoPeliculas.length > 0 ? catalogoPeliculas : await buscarPeliculasEnInternet("", "TODAS");
    }

    const bolsaValida = bolsaDePeliculas.filter(p => p && p.titulo && p.rating && p.rating !== "N/A");

    setTimeout(() => {
      if (bolsaValida.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * bolsaValida.length);
        const peliGanadora = bolsaValida[indiceAleatorio];
        manejarAbrirDetalles(peliGanadora.titulo);
      } else {
        alert(t.ruletaError);
      }
      setGirandoRuleta(false);
    }, 1000);
  };

  const cambiarFiltroCategoria = (nuevaCategoria) => {
    setCategoriaSeleccionada(nuevaCategoria);
    if (seccionActiva === "inicio") {
      buscarPeliculasEnInternet(textoBuscado, nuevaCategoria);
    }
  };

  const resetearHome = () => {
    setTextoBuscado("");
    setCategoriaSeleccionada("TODAS");
    setOrdenarPorRating(false);
    setSeccionActiva("inicio");
    buscarPeliculasEnInternet("", "TODAS"); 
  };

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('sesion_activa_cinemaster');
    if (usuarioGuardado) {
      setUsuarioActivo(usuarioGuardado);
      const favoritosGuardados = JSON.parse(localStorage.getItem(`favoritos_${usuarioGuardado.toLowerCase()}`)) || [];
      setFavoritos(favoritosGuardados);
    }
    buscarPeliculasEnInternet("", "TODAS");
    cargarTendenciasMundiales(); 
  }, []);

  useEffect(() => {
    if (seccionActiva === "tendencias") {
      setCargando(true);
      cargarTendenciasMundiales().then(() => setCargando(false));
    }
    setCategoriaSeleccionada("TODAS");
    setOrdenarPorRating(false);
  }, [seccionActiva]);

  const alternarFavorito = (pelicula) => {
    if (!usuarioActivo) {
      setModalAbierto(true);
      return;
    }

    let listaActualizada;
    const existe = favoritos.some(f => f.titulo === pelicula.titulo);

    if (existe) {
      listaActualizada = favoritos.filter(f => f.titulo !== pelicula.titulo);
    } else {
      listaActualizada = [...favoritos, pelicula];
    }

    setFavoritos(listaActualizada);
    localStorage.setItem(`favoritos_${usuarioActivo.toLowerCase()}`, JSON.stringify(listaActualizada));
  };

  const manejarLoginExitoso = (nombre) => {
    setUsuarioActivo(nombre);
    localStorage.setItem('sesion_activa_cinemaster', nombre);
    const favoritosGuardados = JSON.parse(localStorage.getItem(`favoritos_${nombre.toLowerCase()}`)) || [];
    setFavoritos(favoritosGuardados);
  };

  const manejarCerrarSesion = () => {
    setUsuarioActivo(null);
    setFavoritos([]);
    localStorage.removeItem('sesion_activa_cinemaster');
    setSeccionActiva("inicio");
  };

  const manejarBusqueda = (e) => {
    e.preventDefault();
    setSeccionActiva("inicio");
    buscarPeliculasEnInternet(textoBuscado, categoriaSeleccionada);
  };

  const manejarAbrirDetalles = (titulo) => {
    setPeliSeleccionadaTitulo(titulo);
    setModalDetalleAbierto(true);
  };

  const aplicarOrdenamiento = (lista) => {
    let clon = [...lista];
    if (ordenarPorRating) {
      clon.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    }
    return clon;
  };

  const peliculasInicioProcesadas = aplicarOrdenamiento(catalogoPeliculas);

  const peliculasTendenciaProcesadas = aplicarOrdenamiento(
    categoriaSeleccionada === "TODAS" 
      ? peliculasTendencia 
      : peliculasTendencia.filter(p => p.genero === categoriaSeleccionada)
  );

 return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <nav className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-8 bg-slate-900 border-b border-slate-800 gap-4 sm:gap-0">
        
        {/* 🎬 LOGO (Centrado en móvil, a la izquierda en pantallas más grandes) */}
        <div onClick={resetearHome} className="text-2xl font-black tracking-tighter text-cyan-400 cursor-pointer select-none">
          CINE<span className="text-white">MASTER</span>
        </div>
        
        {/* MENÚ CENTRAL DE NAVEGACIÓN */}
        <div className="space-x-6 hidden md:flex font-medium text-slate-300">
          <button onClick={resetearHome} className={`transition ${seccionActiva === "inicio" ? "text-cyan-400 font-bold" : ""}`}>{t.inicio}</button>
          <button onClick={() => setSeccionActiva("tendencias")} className={`transition ${seccionActiva === "tendencias" ? "text-cyan-400 font-bold" : ""}`}>{t.tendencias}</button>
          <button onClick={() => setSeccionActiva("milista")} className={`transition ${seccionActiva === "milista" ? "text-cyan-400 font-bold" : ""}`}>{t.miLista} ({favoritos.length})</button>
        </div>

        {/* 🌐 BOTONES (Contenedor fluido que nunca se va a desbordar en celulares) */}
        <div className="flex items-center justify-center sm:justify-end space-x-2 sm:space-x-4 w-full sm:w-auto">

          {/* 🌐 SELECTOR DE IDIOMA */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 bg-slate-800 border border-slate-700 rounded-xl px-2 sm:px-2.5 py-1.5 focus-within:ring-2 focus-within:ring-cyan-500">
            <span className="text-sm">🌐</span>
            <select 
              value={idioma} 
              onChange={(e) => setIdioma(e.target.value)} 
              className="bg-transparent text-[11px] sm:text-xs font-bold cursor-pointer text-slate-200 focus:outline-none pr-1 sm:pr-2"
              title="Cambiar idioma / Change language"
            >
              <option value="ES" className="bg-slate-900 text-white">Español (ES)</option>
              <option value="EN" className="bg-slate-900 text-white">English (EN)</option>
              <option value="IT" className="bg-slate-900 text-white">Italiano (IT)</option>
            </select>
          </div>

          {/* 🚪 SECCIÓN DE USUARIO / BOTÓN INGRESAR */}
          {usuarioActivo ? (
            <div className="flex items-center space-x-2 sm:space-x-3 bg-slate-800/80 pl-2.5 sm:pl-3 pr-3 sm:pr-4 py-1.5 rounded-full border border-slate-700/60">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center justify-center uppercase text-xs sm:text-base">{usuarioActivo.charAt(0)}</div>
              <span className="text-xs sm:text-sm font-semibold max-w-[90px] sm:max-w-[120px] truncate">{usuarioActivo}</span>
              <button onClick={manejarCerrarSesion} className="text-xs text-slate-400 hover:text-rose-400 ml-1 sm:ml-2">🚪</button>
            </div>
          ) : (
            <button onClick={() => setModalAbierto(true)} className="bg-cyan-600 hover:bg-cyan-500 text-white text-xs sm:text-base px-4 sm:px-5 py-2 rounded-full font-bold transition whitespace-nowrap">{t.ingresar}</button>
          )}
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center pt-20 px-4">
        {seccionActiva === "inicio" && (
          <>
            {/* Título principal con traducción dinámica perfecta en los 3 idiomas */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6 max-w-4xl leading-tight">
              {t.tituloHero}
            </h1>
            
            <form onSubmit={manejarBusqueda} className="relative w-full max-w-xl mb-4">
              <input type="text" placeholder={t.placeholderBusqueda} className="w-full py-4 px-6 rounded-2xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" value={textoBuscado} onChange={(e) => setTextoBuscado(e.target.value)} />
              <button type="submit" className="absolute right-3 top-2 bg-cyan-500 p-2 rounded-xl text-lg">🔍</button>
            </form>

            <div className="mb-10 w-full max-w-xl flex justify-center">
              <button 
                onClick={activarRuletaDelDestino}
                disabled={girandoRuleta}
                className={`w-full py-3 px-6 rounded-xl font-black text-sm uppercase tracking-wider shadow-lg border transition-all duration-300 flex items-center justify-center gap-2 ${
                  girandoRuleta 
                    ? "bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed" 
                    : "bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white border-transparent hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                {girandoRuleta ? t.ruletaGirar : t.ruletaSuerte}
              </button>
            </div>

            <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 mb-10">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {["TODAS", "ACCIÓN", "COMEDIA", "DRAMA", "CIENCIA FICCIÓN"].map((cat) => {
                  let badgeNombre = t.todas;
                  if (cat === "ACCIÓN") badgeNombre = t.accion;
                  if (cat === "COMEDIA") badgeNombre = t.comedia;
                  if (cat === "DRAMA") badgeNombre = t.drama;
                  if (cat === "CIENCIA FICCIÓN") badgeNombre = t.cienciaFiccion;

                  return (
                    <button
                      key={cat}
                      onClick={() => cambiarFiltroCategoria(cat)}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold border ${categoriaSeleccionada === cat ? "bg-cyan-500 text-slate-950 border-cyan-400" : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"}`}
                    >
                      {badgeNombre}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setOrdenarPorRating(!ordenarPorRating)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold border ${ordenarPorRating ? "bg-amber-500 text-slate-950 border-amber-400" : "bg-slate-800 text-slate-400 border-slate-700"}`}
              >
                {t.mejorRating} {ordenarPorRating ? "✓" : ""}
              </button>
            </div>

            {cargando && <p className="text-slate-400 font-medium">...</p>}
            {errorApi && !cargando && <div className="text-slate-400">❌ {errorApi}</div>}

            {!cargando && !errorApi && (
              <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-20">
                {peliculasInicioProcesadas.map((pelicula, index) => {
                  let generoTraducido = t.drama;
                  if (pelicula.genero === "ACCIÓN") generoTraducido = t.accion;
                  if (pelicula.genero === "COMEDIA") generoTraducido = t.comedia;
                  if (pelicula.genero === "CIENCIA FICCIÓN") generoTraducido = t.cienciaFiccion;

                  return (
                    <MovieCard 
                      key={index} 
                      pelicula={{...pelicula, genero: generoTraducido}} 
                      esFavorita={favoritos.some(f => f.titulo === pelicula.titulo)} 
                      onAlternarFavorito={alternarFavorito} 
                      onVerDetalles={manejarAbrirDetalles} 
                    />
                  );
                })}
              </section>
            )}
          </>
        )}

        {seccionActiva === "tendencias" && (
          <div className="w-full max-w-6xl pb-20">
            <h2 className="text-4xl font-extrabold text-center mb-10">{t.tendenciasGlobales}</h2>
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 mb-10">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {["TODAS", "ACCIÓN", "COMEDIA", "DRAMA", "CIENCIA FICCIÓN"].map((cat) => {
                  let badgeNombre = t.todas;
                  if (cat === "ACCIÓN") badgeNombre = t.accion;
                  if (cat === "COMEDIA") badgeNombre = t.comedia;
                  if (cat === "DRAMA") badgeNombre = t.drama;
                  if (cat === "CIENCIA FICCIÓN") badgeNombre = t.cienciaFiccion;

                  return (
                    <button key={cat} onClick={() => setCategoriaSeleccionada(cat)} className={`px-4 py-1.5 rounded-xl text-xs font-bold border ${categoriaSeleccionada === cat ? "bg-cyan-500 text-slate-950 border-cyan-400" : "bg-slate-800 text-slate-400 border-slate-700"}`}>{badgeNombre}</button>
                  );
                })}
              </div>
            </div>
            {cargando && <p className="text-center text-slate-400">{t.tendenciasConectando}</p>}
            {!cargando && (
              <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {peliculasTendenciaProcesadas.map((pelicula, index) => {
                  let generoTraducido = t.drama;
                  if (pelicula.genero === "ACCIÓN") generoTraducido = t.accion;
                  if (pelicula.genero === "COMEDIA") generoTraducido = t.comedia;
                  if (pelicula.genero === "CIENCIA FICCIÓN") generoTraducido = t.cienciaFiccion;

                  return (
                    <MovieCard 
                      key={index} 
                      pelicula={{...pelicula, genero: generoTraducido}} 
                      esFavorita={favoritos.some(f => f.titulo === pelicula.titulo)} 
                      onAlternarFavorito={alternarFavorito} 
                      onVerDetalles={manejarAbrirDetalles} 
                    />
                  );
                })}
              </section>
            )}
          </div>
        )}

        {seccionActiva === "milista" && (
          <div className="w-full max-w-6xl pb-20">
            <h2 className="text-4xl font-extrabold text-center mb-10">{t.coleccionDe} <span className="text-cyan-400">{usuarioActivo || t.invitado}</span></h2>
            {favoritos.length > 0 ? (
              <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {favoritos.map((pelicula, index) => (
                  <MovieCard key={index} pelicula={pelicula} esFavorita={true} onAlternarFavorito={alternarFavorito} onVerDetalles={manejarAbrirDetalles} />
                ))}
              </section>
            ) : (
              <p className="text-center text-slate-500">{t.listaVacia}</p>
            )}
          </div>
        )}
      </main>

      <LoginModal isOpen={modalAbierto} onClose={() => setModalAbierto(false)} onLoginExitoso={manejarLoginExitoso} t={t} />
      
      <MovieDetailModal 
        isOpen={modalDetalleAbierto} 
        onClose={() => setModalDetalleAbierto(false)} 
        peliculaTitulo={peliSeleccionadaTitulo} 
        usuarioActivo={usuarioActivo}
        onAbrirLogin={() => setModalAbierto(true)}
        t={t}
      />
    </div>
  );
}

export default App;