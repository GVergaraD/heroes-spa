import { Link } from "react-router";

const CharactersByHero = ({ alter_ego, characters }) => {
  return alter_ego === characters ? (
    <></>
  ) : (
    <p className="card-text">{characters}</p>
  );
};

export const HeroCard = ({
  id,
  superhero,
  // publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  // const heroImageUrl = `/assets/heroes/${id}.jpg`;
  const heroImageUrl = `/heroes/${ id }.jpg`;

  // const charactersByHero = <p>{characters}</p>;

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 animate__animated animate__fadeIn">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {/* {alter_ego !== characters && charactersByHero} */}

              <CharactersByHero characters={characters} alter_ego={alter_ego} />

              <p className="text-muted">{first_appearance}</p>

              <Link to={`/hero/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
