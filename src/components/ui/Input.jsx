import PropTypes from 'prop-types'
import { cn } from '@/lib/utils'

export function Input({ placeholder, Icon, handleOnChange, inputStyles, className }) {
    return (
        <>
            <div className={cn('relative', className)}>
                {
                    Icon &&
                    <i className={cn('absolute z-10')} style={{ top: 14, left: 14 }}><Icon /></i>
                }
                <input onChange={handleOnChange} placeholder={placeholder} className={cn('w-full p-3 bg-neutral-100', {'pl-11': Icon}, inputStyles)} />
            </div>
        </>
    )
}

Input.propTypes = {
    Icon:PropTypes.elementType,
    className:PropTypes.string,
    placeholder: PropTypes.string,
    handleOnChange: PropTypes.func,
    inputStyles: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}