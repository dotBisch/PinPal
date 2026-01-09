import { useState } from 'react';

const PETS = [
    { id: 1, name: 'Bantay', type: 'dog', age: '3 years', gender: 'Male', image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=400&q=80', description: 'Loyal and protective.' },
    { id: 2, name: 'Muning', type: 'cat', age: '2 years', gender: 'Female', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80', description: 'Sweet and cuddly.' },
    { id: 3, name: 'Tagpi', type: 'dog', age: '5 months', gender: 'Male', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80', description: 'Playful puppy energy.' },
    { id: 4, name: 'Luna', type: 'cat', age: '1 year', gender: 'Female', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=400&q=80', description: 'Independent queen.' },
    { id: 5, name: 'Brownie', type: 'dog', age: '4 years', gender: 'Male', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80', description: 'Loves belly rubs.' },
    { id: 6, name: 'Ming', type: 'cat', age: '6 months', gender: 'Male', image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=400&q=80', description: 'Curious explorer.' },
];

export default function PetPage() {
    const [filter, setFilter] = useState('all');

    const filteredPets = filter === 'all' ? PETS : PETS.filter(p => p.type === filter);

    return (
        <div className="section" style={{ minHeight: '80vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1>Adopt a Friend</h1>
                    <p style={{ color: '#666', fontSize: '1.2rem' }}>Every adoption saves a life.</p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px' }}>
                        <button
                            onClick={() => setFilter('all')}
                            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter('dog')}
                            className={`btn ${filter === 'dog' ? 'btn-primary' : 'btn-outline'}`}
                        >
                            Dogs (Aspins)
                        </button>
                        <button
                            onClick={() => setFilter('cat')}
                            className={`btn ${filter === 'cat' ? 'btn-primary' : 'btn-outline'}`}
                        >
                            Cats (Puspins)
                        </button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
                    {filteredPets.map(pet => (
                        <div key={pet.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                            <div
                                style={{
                                    height: '300px',
                                    backgroundImage: `url(${pet.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    transition: 'transform 0.5s'
                                }}
                            />
                            <div style={{ padding: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                    <h3>{pet.name}</h3>
                                    <span style={{
                                        background: pet.type === 'dog' ? '#FFF3E0' : '#E0F2F1',
                                        color: pet.type === 'dog' ? '#F57C00' : '#009688',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        fontWeight: '600',
                                        textTransform: 'uppercase'
                                    }}>
                                        {pet.type}
                                    </span>
                                </div>
                                <p style={{ color: '#666', marginBottom: '16px' }}>{pet.age} • {pet.gender}</p>
                                <p style={{ marginBottom: '24px' }}>{pet.description}</p>
                                <button className="btn btn-primary" style={{ width: '100%' }}>
                                    Meet {pet.name}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
