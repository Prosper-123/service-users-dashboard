import React from 'react';

const FilterBar = ({ filters, setFilters }) => {
    const updateFilter = (key, value) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <select onChange={(e) => updateFilter('status', e.target.value)}>
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="on hold">On Hold</option>
            </select>

            <select onChange={(e) => updateFilter('age', e.target.value)}>
            <option value="">All Ages</option>
            <option value="0-30">0-30</option>
            <option value="31-60">31-60</option>
            <option value="61-90">61-90</option>
            <option value="91-120">91-120</option>
            </select>

        </div>
    );
};

export default FilterBar;