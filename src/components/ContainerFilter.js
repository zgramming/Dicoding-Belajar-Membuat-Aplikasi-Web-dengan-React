import React from "react";

class ContainerFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-filter-todo">
        <div className="d-flex flex-row justify-content-center">
          <input
            className="input-text"
            style={{ width: "50%" }}
            placeholder="Cari berdasarkan judul"
            value={this.props.query}
            onChange={(e) => {
              this.props.onChangeQuery(e);
              this.props.onFilterTodos();
            }}
          ></input>
        </div>
      </div>
    );
  }
}

export default ContainerFilter;
