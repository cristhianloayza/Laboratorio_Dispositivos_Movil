import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  TouchableOpacity, 
  StyleSheet,
  SafeAreaView,
  Alert
} from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [botonActivo, setBotonActivo] = useState(false);

  const manejarRegistro = () => {
    // Validación del campo nombre
    if (nombre.trim() === '') {
      setMensaje('⚠️ Por favor, ingrese su nombre');
      setBotonActivo(false);
      return;
    }

    // Validación del campo email
    if (email.trim() === '') {
      setMensaje('⚠️ Por favor, ingrese su correo electrónico');
      setBotonActivo(false);
      return;
    }

    // Validación simple de email
    if (!email.includes('@') || !email.includes('.')) {
      setMensaje('⚠️ Por favor, ingrese un correo válido (ejemplo@dominio.com)');
      setBotonActivo(false);
      return;
    }

    // Mensaje de éxito
    setMensaje(`✅ ¡Bienvenido ${nombre}!`);
    setBotonActivo(true);
  };

  const limpiarFormulario = () => {
    setNombre('');
    setEmail('');
    setMensaje('');
    setBotonActivo(false);
  };

  const manejarTouchable = () => {
    setMensaje('👆 Botón alternativo presionado');
    setBotonActivo(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.titulo}>📝 Registro de Usuario</Text>
        <Text style={styles.subtitulo}>Laboratorio Semana 04</Text>

        {/* Campo Nombre */}
        <Text style={styles.label}>Nombre completo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre"
          placeholderTextColor="#999"
          value={nombre}
          onChangeText={setNombre}
        />

        {/* Campo Email */}
        <Text style={styles.label}>Correo electrónico:</Text>
        <TextInput
          style={styles.input}
          placeholder="ejemplo@correo.com"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Botón Principal - Button */}
        <View style={styles.buttonContainer}>
          <Button
            title="Registrar"
            onPress={manejarRegistro}
            color="#0EA5E9"
          />
        </View>

        {/* Botón Secundario - TouchableOpacity */}
        <TouchableOpacity
          style={[
            styles.botonSecundario,
            botonActivo && styles.botonActivo
          ]}
          onPress={manejarTouchable}
        >
          <Text style={styles.textoBoton}>
            {botonActivo ? '✅ Presionado' : '👆 Usar TouchableOpacity'}
          </Text>
        </TouchableOpacity>

        {/* Botón Limpiar */}
        <TouchableOpacity
          style={styles.botonLimpiar}
          onPress={limpiarFormulario}
        >
          <Text style={styles.textoBotonLimpiar}>🗑️ Limpiar formulario</Text>
        </TouchableOpacity>

        {/* Mensaje de respuesta */}
        {mensaje !== '' && (
          <View style={[
            styles.mensajeContainer,
            mensaje.includes('⚠️') ? styles.mensajeError : styles.mensajeExito
          ]}>
            <Text style={[
              styles.mensajeTexto,
              mensaje.includes('⚠️') ? styles.textoError : styles.textoExito
            ]}>
              {mensaje}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F1F5F9',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
    color: '#0F172A',
  },
  subtitulo: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    padding: 12,
    marginBottom: 8,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    color: '#0F172A',
  },
  buttonContainer: {
    marginTop: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  botonSecundario: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  botonActivo: {
    backgroundColor: '#22C55E',
  },
  textoBoton: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  botonLimpiar: {
    backgroundColor: '#EF4444',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  textoBotonLimpiar: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  mensajeContainer: {
    marginTop: 20,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
  },
  mensajeError: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FCA5A5',
  },
  mensajeExito: {
    backgroundColor: '#F0FDF4',
    borderColor: '#86EFAC',
  },
  mensajeTexto: {
    fontSize: 16,
    textAlign: 'center',
  },
  textoError: {
    color: '#DC2626',
  },
  textoExito: {
    color: '#16A34A',
  },
});