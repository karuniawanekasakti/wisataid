// // eslint-disable-next-line no-unused-vars
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { useAutocomplete } from '@mui/base/useAutocomplete';
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';
// import { styled } from '@mui/material/styles';
// import { autocompleteClasses } from '@mui/material/Autocomplete';
//
// // Komponen dan gaya-gaya sebelumnya tetap sama
//
// export default function SelectTags(props) {
//     const { options } = props;
//
//     const {
//         getRootProps,
//         getInputLabelProps,
//         getInputProps,
//         getTagProps,
//         getListboxProps,
//         getOptionProps,
//         groupedOptions,
//         value,
//         focused,
//         setAnchorEl,
//     } = useAutocomplete({
//         id: 'customized-hook-demo',
//         defaultValue: [],
//         multiple: true,
//         options,
//         getOptionLabel: (option) => option.title,
//     });
//
//     return (
//         <Root>
//             <div {...getRootProps()}>
//                 <Label {...getInputLabelProps()}>Customized hook</Label>
//                 <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
//                     {value.map((option, index) => (
//                         <StyledTag label={option.title} {...getTagProps({ index })} />
//                     ))}
//                     <input {...getInputProps()} />
//                 </InputWrapper>
//             </div>
//             {groupedOptions.length > 0 ? (
//                 <Listbox {...getListboxProps()}>
//                     {groupedOptions.map((option, index) => (
//                         <li {...getOptionProps({ option, index })}>
//                             <span>{option.title}</span>
//                             <CheckIcon fontSize="small" />
//                         </li>
//                     ))}
//                 </Listbox>
//             ) : null}
//         </Root>
//     );
// }
//
// SelectTags.propTypes = {
//     options: PropTypes.arrayOf(
//         PropTypes.shape({
//             title: PropTypes.string.isRequired,
//             year: PropTypes.number.isRequired,
//         })
//     ).isRequired,
// };
