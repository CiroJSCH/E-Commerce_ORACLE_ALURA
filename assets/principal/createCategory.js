export {categories, createCategory}

const categories = [];

const createCategory = (categoryName) => {
    const category = document.createElement('section');
    category.classList.add('categoria');
    category.setAttribute('id', `${categoryName.toLowerCase().replace(/ /g, "")}`);
    const categoryHead = document.createElement('div');
    categoryHead.innerHTML = `
        <h2 class="head__title">${categoryName}</h2>
        <div class="head__all">
            <p>Ver todo</p>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    `
    categoryHead.classList.add('categoria__head');
    category.appendChild(categoryHead)

    return category;
}