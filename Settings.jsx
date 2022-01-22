const { React } = require('powercord/webpack');
const { SwitchItem } = require('powercord/components/settings');

module.exports = class Settings extends React.Component {
  render () {
    const { getSetting, toggleSetting } = this.props;

    return (
      <div>
        <SwitchItem
          note={[
            'Place a zero-width space after every character when camouflaging.\n' +
            'Basically the original Camotalker\'s functionality.'
          ]}
          value={getSetting('useZWSpaces', true)}
          onChange={() => toggleSetting('useZWSpaces')}
        >
          Use Zero-Width Spaces
        </SwitchItem>

        <SwitchItem
          note={[
              'Replaces every character with a similar-looking one from unicode. Characters are taken ' +
              'from the brilliant tool at https://obfuscator.uo1.net/.\n'+
              'These may appear as missing characters or rectangles on certain devices.']}
          value={getSetting('useCharObf', true)}
          onChange={() => toggleSetting('useCharObf')}
        >
          Obfuscate All Characters
        </SwitchItem>

        <SwitchItem
          note={'Automatically camouflages if your message contains one of the hardcoded keywords.'}
          value={getSetting('camoOnKeyword', false)}
          onChange={() => toggleSetting('camoOnKeyword')}
        >
          AutoCamo On Keyword
        </SwitchItem>
      </div>
    );
  }
};

