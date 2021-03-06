import validatejs from '../Lib/Validate.js'

const validation = {
  email: {
    presence: {
      message: '^Введите email'
    },
    email: {
      message: '^Введён некорректный email'
    }
  },
  password: {
    presence: {
      message: '^Введите пароль'
    },
    format: {
      pattern: '[^*\/~\'\"\“\”\‘\’\„\”\«\»]{6,}',
      flags: 'i',
      message: '^Минимальная длина пароля 6 символов. Запрещены символы *, /, ~, “'
    }
  },
  name: {
    format: {
      pattern: '[^*\/~\'\"\“\”\‘\’\„\”\«\»]{2,}',
      flags: 'i',
      message: '^Имя должно быть не короче двух символов и не содержать *, /, ~, “'
    }
  },
  lastName: {
    format: {
      pattern: '[^*\/~\'\"\“\”\‘\’\„\”\«\»]{2,}',
      flags: 'i',
      message: '^Фамилия должна быть не короче двух символов и не содержать *, /, ~, “'
    }
  },
  phone: {
    presence: {
      message: '^Enter phone'
    },
    format: {
      pattern: '[0-9]{10}',
      flags: 'i',
      message: 'should have 10 digits'
    }
  },
  code: {
    presence: {
      message: '^Enter SMS code'
    },
    format: {
      pattern: '[0-9]{4}',
      flags: 'i',
      message: 'should have 4 digits'
    }
  },
};

export default function validate(fieldName, value) {
  const formValues = {};
  formValues[fieldName] = value;

  const formFields = {};
  formFields[fieldName] = validation[fieldName];

  const result = validatejs(formValues, formFields);

  if (result) {
    return result[fieldName][0];
  }

  return '';
}