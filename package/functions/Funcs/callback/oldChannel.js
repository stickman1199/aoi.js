const { ChannelOptions } = require('../../../Utils/Constants.js');

module.exports = async d => {
    const data = d.util.openFunc(d);

    const [option = 'name'] = data.inside.splits;

    const Opx = ChannelOptions[option];
    data.result = eval(`d.data.oldc?.${Opx}`);

    return {
        code: d.util.setCode(data)
    }
}