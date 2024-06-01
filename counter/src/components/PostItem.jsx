import React from "react";

function Postitem() {
    return(
        <div className="post">
        <div className="post__content">
          <strong>JS</strong>
          <div>React</div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    )
}

export default Postitem;