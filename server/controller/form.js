const db = require('../db');
const { resEnd } = require('../common');

const saveForm = data => {
  if (data.id) {
    db.prepare('UPDATE forms set name = ?, api = ?, origin = ?, schema = ?, desc = ?, ext = ? where id = ?').run(
      data.name,
      data.api,
      data.origin,
      data.schema,
      data.desc,
      data.ext,
      data.id,
    );
  } else {
    db.prepare('INSERT INTO forms (name, api, origin, schema, desc, ext) VALUES (?, ?, ?, ?, ?, ?)').run(
      data.name,
      data.api,
      data.origin,
      data.schema,
      data.desc,
      data.ext,
    );
  }
};

const getForm = id => db.prepare('SELECT * FROM forms WHERE id = ?').get(id);

module.exports = ctx => {
  if (ctx.method.toUpperCase() == 'GET') {
    resEnd(ctx, {
      data: getForm(ctx.query.id),
    });
  } else {
    try {
      saveForm(ctx.request.body);
      resEnd(ctx);
    } catch (err) {
      resEnd(ctx, { code: 500, msg: String(err) });
    }
  }
};