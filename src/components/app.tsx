import React from 'react';
import ReactDOM from 'react-dom';

interface ModalComponentProps {
  content: string;
}

interface ModalComponentState {
  isOpen: boolean;
}

class ModalComponent extends React.Component<ModalComponentProps, ModalComponentState> {
  private readonly el: HTMLDivElement;

  constructor(props: ModalComponentProps) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.el = document.createElement('div');
    this.el.className = 'modal';
    this.el.style.position = 'fixed';
    this.el.style.top = '0';
    this.el.style.left = '0';
    this.el.style.width = '100%';
    this.el.style.height = '100%';
    this.el.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  handleCloseModal = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { content } = this.props;
    const { isOpen } = this.state;

    return isOpen ? ReactDOM.createPortal(
      <div className="modal-content">
        <span className="text-modal">{content}</span>
        <span className="close-modal" onClick={this.handleCloseModal}>X</span>
      </div>,
      this.el,
    ) : null;
  }
}

export default ModalComponent;