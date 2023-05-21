import React, {FC, ReactElement, useRef, useState} from 'react';
import {
  // FlatList,
  StyleSheet,
  Modal,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {Text, View, TouchableOpacity, Colors} from 'react-native-ui-lib';
import {IValueProps} from '@Types/IValueProps';
import SvgXml, {DropDownD, DropDownU} from '@Components/SvgXml';
import {getStatusBarHeight} from '@Utils/utils';

interface Props {
  placeholder: string;
  data: IValueProps[];
  onSelect: (item: {label: string; value: string}) => void;
  containerStyle?: StyleProp<ViewStyle>;
  selectedValue?: IValueProps;
  marginH?: number;
  marginV?: number;
  marginT?: number;
}

const Dropdown: FC<Props> = ({
  placeholder,
  data,
  onSelect,
  selectedValue,
  marginT,
}: Props) => {
  const DropdownButton = useRef<any>();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<IValueProps | undefined>(
    selectedValue ? selectedValue : undefined,
  );
  const [dropdownTop, setDropdownTop] = useState<number>(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    setVisible(true);
  };

  const onItemPress = (item: any): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({item}: any): ReactElement<any, any> => {
    if (item.value === selected?.value) {
      return (
        <TouchableOpacity
          paddingV-12
          paddingH-16
          backgroundColor={Colors.mainBlue4}
          radius={5}
          onPress={() => onItemPress(item)}>
          <Text primaryRegular md>
            {item.label}
          </Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        paddingV-12
        paddingH-16
        radius={5}
        onPress={() => onItemPress(item)}>
        <Text primaryRegular sm>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View
            flex
            marginH-8
            style={[styles.dropdown, {paddingTop: dropdownTop}]}>
            {!data || data.length == 0 ? (
              <View flexG center backgroundColor="white">
                <Text primaryRegular lg>
                  Không có dữ liệu để hiển thị.
                </Text>
              </View>
            ) : (
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}>
                {data.map(item => {
                  return renderItem({item: item});
                })}
              </ScrollView>
            )}
          </View>
        </TouchableWithoutFeedback>
        {/* </TouchableOpacity> */}
      </Modal>
    );
  };

  // useEffect(() => {
  //   DropdownButton?.current?.measure(
  //     (
  //       _fx: number,
  //       _fy: number,
  //       _w: number,
  //       h: number,
  //       _px: number,
  //       _py: number,
  //     ) => {
  //       console.log(_fx, _fy, _w, h, _px, _py);
  //       setDropdownTop(_py + h - 24);
  //     },
  //   );
  // }, [selected]);

  return (
    <TouchableOpacity
      row
      spread
      centerV
      paddingV-8
      paddingH-16
      marginB-8
      border={0.5}
      borderColor={Colors.gray3}
      radius={10}
      ref={DropdownButton}
      onPress={toggleDropdown}
      onLayout={(event: any) => {
        const layout = event.nativeEvent.layout;
        setDropdownTop(
          layout.y + layout.height + getStatusBarHeight() + marginT,
        );
      }}>
      {renderDropdown()}
      <View width="92%">
        <Text
          primaryRegular
          md
          style={{color: selected ? Colors.black : Colors.secondary}}>
          {selected
            ? selected.label
            : selectedValue
            ? selectedValue.label
            : placeholder}
        </Text>
      </View>
      <SvgXml xml={visible ? DropDownU : DropDownD} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  dropdown: {
    // position: 'absolute',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  scrollView: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default Dropdown;
