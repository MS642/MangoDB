import * as React from "react";

class MangoTree {
  render() {
    const { mangosGrowing } = this.props;
    let i = 0;
    const mangosOnTree = mangosGrowing.map((mango) => {
      const item = (
        <li className="mango" key={i}>
          {mango}
        </li>
      );
      i += 1;
      return item;
    });
    return (
      <div className="mangoTree">
        <ul>{mangosOnTree}</ul>
        <a href="/cliparts/5/c/7/9/1195427467858604967PeterM_Tree.svg.med.png">
          <img
            src="/cliparts/5/c/7/9/1195427467858604967PeterM_Tree.svg.med.png"
            alt="Tree clip art"
          />
        </a>
      </div>
    );
  }
}

export default MangoTree;
