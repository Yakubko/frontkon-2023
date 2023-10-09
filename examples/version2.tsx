import React from 'react';

interface Item {
  name: string;
  favorite: boolean;
  createdAt: string;
}

export const ListItem = React.memo(function ListItem({ name, favorite, createdAt }: Item): React.ReactElement {
  const handleFavorite = () => {
    void callSomeApi(!favorite);
  };

  const date = new Date(createdAt);
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedTime = date.toLocaleDateString('de-DE', options);

  return (
    <div>
      {name} <Icon isFavorited={favorite} onClick={handleFavorite} />
      {formattedTime}
    </div>
  );
});
