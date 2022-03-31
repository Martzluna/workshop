import React from 'react'

function Filter({ categories, selectFilter }) {
  const listCategories = Object.keys(categories)

  return (
    <div>
      <div>
        <input type="search" />
        <button>Buscar</button>
      </div>
      <br></br>
      <div class="accordion" id="accordionExample">
        {listCategories.map((item, key) => (
          <div class="accordion-item">
            <h2 class="accordion-header" id={`heading${key}`}>
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${key}`} aria-expanded="false" aria-controls={`collapse${item}`}>
                {categories[item].label}
              </button>
            </h2>
            <div id={`collapse${key}`} class="accordion-collapse collapse" aria-labelledby={`heading${key}`} data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul class="list-group">
                  {categories[item].values.map((value, key) => (
                    <li class="list-group-item" key={key}>
                      <input class="form-check-input me-1" type="checkbox" checked={categories[item].checked === value } onChange={() => selectFilter({value: value, type: item})} />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filter