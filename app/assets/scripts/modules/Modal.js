import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.events();
  }

  openModal(event) {
    this.modal.addClass('modal--is-visible');
    event.preventDefault();
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible');
  }

  events() {
    // clicking the open modal button
    this.openModalButton.on('click', this.openModal.bind(this));
    // clicking the x close modal button
    this.closeModalButton.on('click', this.closeModal.bind(this));
    // pushes any key
    $(document).on('keyup', this.keypressHandler.bind(this));
  }

  keypressHandler(e) {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }
}

export default Modal;