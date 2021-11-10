import React from "react";
import { Card } from "semantic-ui-react";
import { useState } from "react";

function PokemonCard({id, name, hp, sprites}) {

  const [spriteSide, setSpriteSide] = useState('front')

  function handleSpriteToggle(side){
    if (side === 'front'){
      setSpriteSide('back')
    } else if (side === 'back'){
      setSpriteSide('front')
    }
  }

  return (
    <Card onClick = {() => handleSpriteToggle(spriteSide)}>
      <div>
        <div className="image">
          <img alt="oh no!" className="imageStyle" src={sprites[spriteSide]} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
