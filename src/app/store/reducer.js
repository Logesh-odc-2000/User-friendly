import actiontype from  './actiontype'
const initialState = {
  navigation: [],
 
};

const Store = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.ADD:
      return {
        ...state,
        navigation: [...state.navigation, { name:action.payload.name, children: [] }],
      };

      case actiontype.ADDNEST:
        return {
          ...state,
          navigation: state.navigation.map((menu,index) =>
            index === action.payload.id
              ? { ...menu, children: [...menu.children, { name: action.payload.item }] }
              : menu
          ),
        };
        



        case actiontype.DELETE:
          return {
            ...state,
            navigation: state.navigation.filter((_, parentIndex) => parentIndex !== action.payload.parentIndex),
          };

          case actiontype.DELETENEST:
            return {
              ...state,
              navigation: state.navigation.map((menu, menuIndex) =>
                menuIndex === action.payload.menuIndex
                  ? {
                      ...menu,
                      children: menu.children.filter((_, childIndex) => childIndex !== action.payload.childIndex),
                    }
                  : menu
              ),
            };

            case actiontype.EDIT:
              return{
                ...state,
        navigation: state.navigation.map((menu, index) =>
          index === action.payload.menuIndex
            ? {
                ...menu,
                name: action.payload.newName,
              }
            : menu
        ),
              }

              case actiontype.EDITNEST:
                return{
                  ...state,
                  navigation: state.navigation.map((menu, index) =>
                    index === action.payload.menuIndex
                      ? {
                          ...menu,
                          children: menu.children.map((child, childIndex) =>
                            childIndex === action.payload.childIndex
                              ? {
                                  ...child,
                                  name: action.payload.newName,
                                }
                              : child
                          ),
                        }
                      : menu
                  ),
                }


        
    default:  
      return state;
  }
};

export default Store;
