import Profile from '../../components/profile.js';

export default function Gallery() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#9cc4a8', minHeight: '100vh' }}>
      
      {/* Novo título adicionado aqui */}
      <h1 style={{ textAlign: 'center', color: '#14532d', marginBottom: '30px', fontSize: '1.8rem' }}>
        Site criado para a disciplina Programação Front-End
      </h1>
      
      <section style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        backgroundColor: '#afc7b7', 
        padding: '40px 30px',
        borderRadius: '16px',
        boxShadow: '0 10px 15px -3px rgba(22, 101, 52, 0.15)', 
        maxWidth: '450px',
        margin: '0 auto' 
      }}>
        
        <Profile />
        
        {/* Nome alterado para h2 */}
        <h2 style={{ margin: '20px 0 5px 0', fontSize: '1.5rem', color: '#14532d' }}>Adriano Valença</h2>
        
        <div style={{ color: '#166534', lineHeight: '1.6', fontSize: '0.95rem' }}>
          <p style={{ marginBottom: '12px' }}>
            Sou estudante de Sistemas para Internet na UNICAP.
          </p>
          <p>
            Atualmente, estou aprofundando meus conhecimentos em desenvolvimento web.
          </p>
        </div>

      </section>

    </main>
  );
}