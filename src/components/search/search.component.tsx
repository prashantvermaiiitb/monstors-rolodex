import "./search.component.css";
import { ChangeEvent, ChangeEventHandler } from "react";

// const func: (a: string, b: string, c: string) => boolean = (a, b, c) => true;

/**
 * inside typescript there are 2 types to define type for objects
 * 1. type : these canot be overloaded and extended, very limited
 *          they are similar to interface except we donot need 'I' to start with.
 *          they allow us to do a UNION which is combination of types.like we can have 2 different address types 'us' or 'canadian'
 *          for these we 2 addresses we can have 2 types and can do the union.
 *          if you write more of a functional style of code then you WRITE types.
 * 2. interface : If you do more object oriented style then you use interfaces.
 * type and interfaces are similar but interfaces are extendible very similar to class component.
 * all interfaces start with 'I' letter
 *
 * React has already provided typed with it's component so that we can use typescript with them.
 * @param param0
 * @returns
 */

// interface ISearchBoxPropsHandler {
//   handleChange: () => {};
// }

// interface ISearchBoxProps extends ISearchBoxPropsHandler {
//   // here you will define the shape of the object
//   placeholder: string;
// }

// /**
//  * Now isearchBoxProps will be having all the 3 values
//  */
// interface ISearchBoxProps {
//   className: string;
// }

// defining type for the search box
/**
 * ChangeEventHandler<T = Element> = (event: ChangeEvent<T>) => void
 * This is showing tht this function accepts an element, this element is a Type
 * Element is a bunch of different HTMLElement Types and HTMLInputElement is one of the type
 * give me some type T and i will use it to define sometype later on
 *
 */
type SearchBox = {
  // shape of the object
  className: string;
  placeholder: string;
  // Tell me what kind of Html input element this will be so that I am going to receive the correct event type.
  // react is typed by default, we will leverage this from react, so tat
  // for what type of HTML element this change event is for ?
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  fn?: ChangeEventHandler<HTMLInputElement>;
};

// type CanadianAddress = { street: string; province: string };
// type AmericanAddress = { street: string; state: string };
// type NorthAmericanAddress = CanadianAddress | AmericanAddress;
// const Address: NorthAmericanAddress = {
//   street: "",
//   province: "",
// };

/**
 * Interfaces can be overloaded, what you can do is you can write interfaces couple of times
 * then typescript will be combining both of them.
 */

const SearchBox = ({ placeholder, handleChange }: SearchBox) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
