export const validateEmptyMatrix = ( matrix: number[][]) => {
    for (const row of matrix) {
        for (const cell of row) {
            if (!cell) {
                return false
            }
        }
    }

    return true
}