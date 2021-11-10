import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ formData, handleSubmit, handleFormData }) {


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleFormData} fluid label="Name" placeholder="Name" name="name" value={formData.name}/>
          <Form.Input onChange={handleFormData} fluid label="hp" placeholder="hp" name="hp" value={formData.hp} />
          <Form.Input
            onChange={handleFormData}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
          />
          <Form.Input
            onChange={handleFormData}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
