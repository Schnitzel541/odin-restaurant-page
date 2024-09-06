const contentDiv = document.querySelector("#content");

const createLabel = (labelFor, labelText) => {
    const label = document.createElement("label");
    label.for = labelFor;
    label.textContent = labelText
    return label;
}

const createInput = (type, id) => {
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    return input;
}

export const contact = () => {
    const form = document.createElement("form");
    form.method = "POST";

    form.appendChild(createLabel("first-name", "First name:"));
    form.appendChild(createInput("text", "last-name"));
    form.appendChild(createLabel("last-name", "Last name:"));
    form.appendChild(createInput("text", "last-name"));
    form.appendChild(createLabel("email", "E-mail:"));
    form.appendChild(createInput("email", "email"));
    form.appendChild(createLabel("text-area", "Message:"));

    // Text area separate from functions due to different HTML attributes
    const textArea = document.createElement("textarea");
    textArea.rows = "10";
    textArea.cols = "75";
    form.appendChild(textArea);

    // Submit button separate from functions due to different HTML attributes
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.id = "submit-button";
    form.appendChild(submitButton);

    contentDiv.appendChild(form);
}