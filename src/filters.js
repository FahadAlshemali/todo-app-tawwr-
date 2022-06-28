const Filters = ({updateFilter, uncheckAll}) => {
	return (
		<div>
			<button onClick={() => updateFilter('NON_COMPLETE')}>Show Incomplete</button>
			<button onClick={() => updateFilter('COMPLETE')}>Show Complete</button>
			<button onClick={() => updateFilter('ALL')}>Show All</button>
			<button onClick={uncheckAll}>Uncheck All</button>
		</div>
	);
};

export default Filters;
