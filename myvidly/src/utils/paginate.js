import _ from "lodash";

export function paginate(items,pageNbr,pageSize)
{
    const starIndex = (pageNbr-1) * pageSize;
    return _(items)
            .slice(starIndex)
            .take(pageSize)
            .value();
}