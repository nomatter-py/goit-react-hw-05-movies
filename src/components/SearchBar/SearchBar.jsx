import { SearchBarComponent, FormStyled, ButtonSearch, FieldStyled } from './SearchBar.styled';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

const SearchBar = ({handleQuery}) => {
  
    return (
      <SearchBarComponent>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={(values, actions) => {
              handleQuery({ query: values.search });
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <FormStyled>
              {isSubmitting && <div>Loading...</div>}
              <ButtonSearch type="submit" className="button" disabled={isSubmitting}>
                <span className="button-label"></span>
              </ButtonSearch>

              <FieldStyled
                name="search"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search"
              />
            </FormStyled>
          )}
        </Formik>
      </SearchBarComponent>
    );
  
}


SearchBar.propTypes = {
  handleQuery: PropTypes.func.isRequired,
}

export default SearchBar;