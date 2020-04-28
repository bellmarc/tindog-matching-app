import React from "react";


const Category = () => {
    const categories = [
        {id: 0, title: "Kingdom: Animal", subcategories:[1,2,3,4]},
        {id: 1, title: "Phylum: Chordata", subcategories: [2]},
        {id: 2, title: "Clade Synapsida", subcategories:[3]},
        {id: 3, title: "Class: Mammailia", subcategories: [5]},
        {id: 4, title: "Genus: Felis", subcategories: [7]}
      ];
    return (
        <div>
            Category Test
        </div>
    )
}


export default Category