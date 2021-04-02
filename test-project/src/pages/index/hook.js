/*
 * @Author: Mr.Mao
 * @Date: 2021-04-02 09:12:31
 * @LastEditTime: 2021-04-02 09:16:47
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
export const useXX = () => {
  const func =async () => {
    try {
      console.log('-----')
      await Promise.resolve(123132)
    } catch (error) {
      console.log(error)
    }
  }
  return {func}
}