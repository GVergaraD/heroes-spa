import { Navigate, useNavigate, useParams } from "react-router";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo (() => getHeroById(id), [id]);
  // console.log(id);
  // console.log(hero);


  const onNavigateBack = () => {
    // -1 regresa a la pagina anterior
    navigate(-1);
    // navigate('/marvel');
    // return <Navigate to="/marvel" />
  }
    

  if (!hero) {
    return <Navigate to="/marvel" />;
    // return <>404 - Not Found</>
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          // src={`/assets/heroes/${id}.jpg`}
          src={`/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={() => onNavigateBack()}>Back</button>
      </div>
    </div>
  );
};
