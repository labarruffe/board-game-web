/**
    * Between min (included) and max (not included):
    * @param min 
    * @param max 
*/
export function RandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}