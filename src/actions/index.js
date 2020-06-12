export function selectBook(book){
//selectBook is an actioncreator , it needs to retun
//an action, an objet with a type property
    return{
        type: "BOOK_SELECTED",
        payload: book

    };

}