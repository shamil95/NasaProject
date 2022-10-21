import FavouritesCard from '../FavouritesCard';

const CreateCard = card => {
    return (
        <div>
            <FavouritesCard key={card.id} image={card.imgUrl} title={card.title} />
        </div>
    );
};

export default CreateCard;
