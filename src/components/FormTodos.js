import React from "react";

class FormTodo extends React.Component {
  constructor(props) {
    super(props);
    const maxCharacter = 50;

    /// Initialize Binding Handler
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);

    /// Initialize State
    this.state = {
      title: "",
      body: "",
      remainingCharacter: maxCharacter,
    };
  }

  onTitleChange(e) {
    const maxCharacter = 50;

    this.setState((prevState) => {
      const remainingChar = maxCharacter - e.target.value.length;
      if (remainingChar < 0) {
        alert("Maksimal character sudah tercapai");
        return false;
      }
      return {
        ...prevState,
        title: e.target.value,
        remainingCharacter: remainingChar,
      };
    });
  }

  onBodyChange(e) {
    this.setState((prevState) => {
      return { ...prevState, body: e.target.value };
    });
  }

  onButtonSubmit(event) {
    event.preventDefault();
    this.props.onAddTodos(this.state);
    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    return (
      <div className="container-form">
        <form onSubmit={this.onButtonSubmit} style={{ width: "100%" }}>
          <h1 className="text-white mb-1">Form Aktifitas</h1>
          <input
            name="title"
            value={this.state.title}
            className="input-text w-100"
            placeholder="Masukkan title"
            onChange={this.onTitleChange}
          />
          <div className="d-flex flex-row justify-content-end">
            <span className="text-white my-1">
              Sisa Karakter {this.state.remainingCharacter}
            </span>
          </div>
          <textarea
            className="input-text w-100 my-1"
            placeholder="Masukkan keterangan"
            onChange={this.onBodyChange}
            value={this.state.body}
          ></textarea>
          <button type="submit" className="btn-submit w-100 my-1">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default FormTodo;
