import styled from "styled-components/native";

export const View = styled.View`
  flex: 1;
`;

export const ViewCard = styled.View`
  border-width: 1.1px;
  flex-direction: row;
  margin: 2% 3%;
  justify-content: space-between;
  background-color: #d3d3d3;
  border-radius: 10px;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
`;

export const Text = styled.Text`
  text-align: right;
  font-size: 17px;
  font-style: italic;
  padding-right: 9px;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`