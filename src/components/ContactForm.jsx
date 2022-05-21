import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm({ clas, onSubmit, order }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [orderProducts, setOrderProducts] = useState('');

  const form = useRef();
  const template = clas === 'modal-basket' ? 'template_1n5yt25' : 'template_dwa60r6';

  function onInputChange(el) {
    switch (el.target.id) {
      case `${clas}-name`:
        setName(el.target.value);
        break;
      case `${clas}-email`:
        setEmail(el.target.value);
        break;
      case `${clas}-phone`:
        setPhone(el.target.value.replace(/\D/gi, ''));
        break;
      case `${clas}-comment`:
        setComment(el.target.value);
        break;
      default:
        return;
    }
  }

  useEffect(
    () =>
      order &&
      setOrderProducts(
        JSON.stringify(
          Object.values(order.products).reduce(
            (acum, el) =>
              (acum = {
                ...acum,
                [Object.values(order.products).indexOf(el) +
                1]: `id: ${el.products[0].id} name: ${el.products[0].name} count: ${el.products.length} total: ${el.totalPrice} $<br>`,
              }),
            { 'Total count': `${order.totalCount}<br>`, 'Total price': `${order.totalPrice} $` },
          ),
        ),
      ),
    [order],
  );

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0ufb15q', template, form.current, 'Ak6FBZKIsLChH3-Q1').then(
      () => {
        if (template === 'template_dwa60r6') {
          alert('Thanks for feedback. We will contact you soon.');
        }
      },
      (error) => {
        console.log(error.text);
      },
    );
    onSubmit && onSubmit(name);
    setName('');
    setEmail('');
    setPhone('');
    setComment('');
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={`${clas}-form`}>
      <input type="hidden" name="my_html" value={orderProducts} readOnly></input>
      <label className="form-name" htmlFor={`${clas}-name`}>
        Name <span className="highlighter">*</span>
      </label>
      <input
        type="text"
        id={`${clas}-name`}
        className={`${clas}-form-window`}
        name="user_name"
        value={name}
        onChange={onInputChange}
        placeholder="Your name"
        required
      />
      <label className="form-name" htmlFor={`${clas}-email`}>
        Email <span className="highlighter">*</span>
      </label>
      <input
        type="email"
        id={`${clas}-email`}
        className={`${clas}-form-window`}
        name="user_email"
        value={email}
        onChange={onInputChange}
        placeholder="Your email arddress"
        required
      />
      <label className="form-name" htmlFor={`${clas}-phone`}>
        Phone <span className="highlighter">*</span>
      </label>
      <input
        type="tel"
        id={`${clas}-phone`}
        className={`${clas}-form-window`}
        value={phone}
        name="user_phone"
        onChange={onInputChange}
        placeholder="Your phone"
        required
      />
      <label className="form-name" htmlFor={`${clas}-comment`}>
        Comment
      </label>
      <textarea
        id={`${clas}-comment`}
        className={`${clas}-form-comment ${clas}-form-window`}
        name="message"
        value={comment}
        onChange={onInputChange}
        placeholder="Your comment"></textarea>
      <input
        type="submit"
        name="modal-form"
        className={`${clas}-form-button button-filled`}
        value="Submit"
      />
    </form>
  );
}

export default ContactForm;
