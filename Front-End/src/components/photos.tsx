import { useEffect, useState } from 'react';
import './photos.css';

export default function Photos() {
  const [photoList, setPhotoList] = useState<string[]>([]);

  useEffect(() => {
    const importPhotos = async () => {
      const photos = import.meta.glob('/src/assets/fotos/*.{jpg,png,jpeg,gif}');
      const photoUrls = await Promise.all(
        Object.keys(photos).map(async (key) => {
          const module: any = await photos[key]();
          return module.default;
        })
      );
      setPhotoList(photoUrls);
    };

    importPhotos();
  }, []);

  return (
    <div className='container'>
      <section>
        <h1>Pookie en Europa</h1>
        <p>Album de fotos de pookie en Europa. Pookie es preciosa, top divina, hermosa y bonita.</p>
        <p>Te amo infinito, pookie.</p>
      </section>
      <section className='the-grid'>
        <ul>
          {photoList.map((photo) => (
            <li>
              <figure className='grid-item'>
                <a href="/">
                  <div className=''>
                    <img src={photo} srcSet="" alt="" className=""/>
                  </div>
                </a>
              </figure>
            </li>
          ))}
        </ul>
      </section>
      
    </div>
    
  );
};