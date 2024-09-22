import React from 'react'
import ReactDOM from 'react-dom'

interface ModalComponentProps {
  content: string
  onClose?: () => void
}

interface ModalComponentState {
  isOpen: boolean
}

class ModalComponent extends React.Component<ModalComponentProps, ModalComponentState> {
  private readonly el: HTMLDivElement

  constructor(props: ModalComponentProps) {
    super(props)
    this.state = {
      isOpen: true,
    }
    this.el = document.createElement('div')
    this.el.className = 'modal'
    this.el.style.position = 'fixed'
    this.el.style.top = '0'
    this.el.style.left = '0'
    this.el.style.width = '100%'
    this.el.style.height = '100%'
    this.el.style.display = 'flex'
    this.el.style.justifyContent = 'center'
    this.el.style.alignItems = 'center'
    this.el.style.backgroundColor = 'rgba(0,0,0,0.5)'
  }

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    if (document.body.contains(this.el)) {
      document.body.removeChild(this.el)
    }
  }

  handleCloseModal = () => {
    this.setState({ isOpen: false }, () => {
      if (document.body.contains(this.el)) {
        document.body.removeChild(this.el)
      }
    })
    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  render() {
    const { content } = this.props
    const { isOpen } = this.state

    return isOpen
      ? ReactDOM.createPortal(
          <div
            className='modal-content'
            style={{
              position: 'relative',
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            <span className='text-modal'>{content}</span>
            <span
              className='close-modal'
              onClick={this.handleCloseModal}
              style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }}
            >
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M18 6L6 18' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M6 6L18 18' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </span>
          </div>,
          this.el,
        )
      : null
  }
}

export default ModalComponent
