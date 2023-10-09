import React from 'react';

interface Item {
  name: string;
  favorite: boolean;
  createdAt: string;
}

export const ListItem = React.memo(function ListItem({ name, favorite, createdAt }: Item): React.ReactElement {
  const handleFavorite = React.useCallback(() => {
    void callSomeApi(!favorite);
  }, [favorite]);

  const options = React.useMemo<Intl.DateTimeFormatOptions>(
    () => ({ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    [],
  );

  const formattedTime = React.useMemo(() => {
    const date = new Date(createdAt);

    return date.toLocaleDateString('de-DE', options);
  }, [options, createdAt]);

  return (
    <div>
      {name} <Icon isFavorited={favorite} onClick={handleFavorite} />
      {formattedTime}
    </div>
  );
});
