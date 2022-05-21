import { useForm, ValidationError } from '@formspree/react';

function FooterForm() {
  const [state, handleSubmit] = useForm('xyyolrlq');
  if (state.succeeded) {
    return <p className="footer-thanks">Thanks for joining!</p>;
  }
  return (
    <form
      action="post"
      onSubmit={handleSubmit}
      className="footer__subscrive-form"
      name="subscriber">
      <input id="email" type="email" name="email" className="footer__subscriber-input" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="button button-filled button-subscriber">
        Submit
      </button>
    </form>
  );
}

export default FooterForm;
