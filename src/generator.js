import mjml2json from 'mjml2json';

let idCounter = 0;

const converter = (json) => {
  const mjmlGeneratorOutput = mjml2json(json);

  console.log(mjmlGeneratorOutput);

  return convertLayout(mjmlGeneratorOutput);
};

export default converter;

function convertLayout(mjml) {
  return { layout: convertNode(mjml) };
}

function convertNode({ tagName, attributes, children, content }) {
  const obj = {
    name: tagName + '-' + String(idCounter++),
    tag: tagName,
    contentType: toContentType(tagName),
    parameters: Object.entries(attributes).map(([key, value]) => {
      const param = {};

      param.name = key;

      console.log(key);

      switch (key) {
        case 'font-size':
        case 'width':
        case 'border-radius':
        case 'height':
        case 'inner-padding':
        case 'letter-spacing':
          if (value.includes('px')) {
            param.floatValue = Number(value.replace('px', ''));
            param.valueSuffix = 'px';
          } else if (value.includes('%')) {
            param.floatValue = Number(value.replace('%', ''));
            param.valueSuffix = '%';
          }

          param.changeable = 'Float';
          break;

        case 'text-align':
        case 'align':
          param.changeable = 'Align';
          param.alignValue = value;
          break;

        case 'color':
        case 'background-color':
          param.changeable = 'Color';
          param.colorValue = value;
          break;

        default:
          param.value = value;
          break;
      }

      return param;
    }),
    children: children?.map(convertNode) ?? [],
  };

  addContent(obj, content);

  return obj;
}

function addContent(json, content) {
  console.log(json);
  switch (json.tag) {
    case 'mj-text':
      json.textContent = content;
      break;
    default:
      return;
  }
}

function toContentType(tag) {
  switch (tag) {
    case 'mj-text':
      return 'text';
    case 'mj-image':
      return 'image';
    case 'mj-button':
      return 'button';
    default:
      return 'none';
  }
}
