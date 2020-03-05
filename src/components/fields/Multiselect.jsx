import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

export default function Multiselect({
  itemlist, confirmFunc, selectedItems, onSelectedItemsChange,
}) {
  return (
    <View>
      <SectionedMultiSelect
        items={itemlist}
        uniqueKey="id"
        subKey="children"
        displayKey="title"
        selectText="Choose some friends:"
        showDropDowns
        readOnlyHeadings
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        hideSelect
        modalWithTouchable
        modalWithSafeAreaView
        onConfirm={confirmFunc}
        colors={{ primary: '#ed5c45' }}
        styles={{ container: { alignSelf: 'center' } }}
        confirmFontFamily="alata-regular"
        searchTextFontFamily="alata-regular"
        // subItemFontFamily="alata-regular"
        // itemFontFamily="alata-regular"
        searchPlaceholderText="Search friends..."
      />
    </View>
  );
}
Multiselect.defaultProps = {
  itemlist: [],
  confirmFunc: null,
  selectedItems: [],
  onSelectedItemsChange: null,
};
Multiselect.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  itemlist: PropTypes.array,
  confirmFunc: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  selectedItems: PropTypes.array,
  onSelectedItemsChange: PropTypes.func,
};
